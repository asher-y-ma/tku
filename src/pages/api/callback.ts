import type { APIRoute } from 'astro';
import { serialize } from 'cookie';

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return new Response(`TikTok Auth Error: ${error}`, { status: 400 });
  }

  if (!code) {
    return new Response('No authorization code provided', { status: 400 });
  }

  const clientKey = import.meta.env.TIKTOK_CLIENT_KEY;
  const clientSecret = import.meta.env.TIKTOK_CLIENT_SECRET;
  const redirectUri = import.meta.env.REDIRECT_URI || 'https://tk.carlifestore.com/api/callback';

  try {
    // 交换 Token
    const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
      },
      body: new URLSearchParams({
        client_key: clientKey || '',
        client_secret: clientSecret || '',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    const data = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('TikTok Token Exchange Error:', data);
      return new Response(`Failed to exchange token: ${JSON.stringify(data)}`, { status: 500 });
    }

    // 获取到的数据通常包含: access_token, refresh_token, expires_in, open_id 等
    const { access_token, refresh_token, open_id } = data;

    // 将 Token 存储在 Cookie 中 (为了简单起见使用 HttpOnly Cookie)
    // 在生产环境中，建议加密或存储在数据库中，并在 Cookie 中仅保存 Session ID
    cookies.set('tk_access_token', access_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: data.expires_in || 3600,
    });

    cookies.set('tk_open_id', open_id, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 30 * 24 * 3600, // 较长时间
    });

    // 如果有 refresh_token 也存下来
    if (refresh_token) {
      cookies.set('tk_refresh_token', refresh_token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: data.refresh_expires_in || 30 * 24 * 3600,
      });
    }

    // 成功后重定向到 dashboard
    return redirect('/dashboard');
  } catch (err) {
    console.error('Callback error:', err);
    return new Response('Internal Server Error during TikTok callback', { status: 500 });
  }
};
