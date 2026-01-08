import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ redirect }) => {
  const clientKey = import.meta.env.TIKTOK_CLIENT_KEY;
  const redirectUri = import.meta.env.REDIRECT_URI || 'https://tk.carlifestore.com/api/callback';
  
  if (!clientKey) {
    return new Response('Missing API Key in .env file', { status: 500 });
  }

  // OAuth 2.0 Authorization URL
  const AUTH_ENDPOINT = 'https://www.tiktok.com/v2/auth/authorize/';
  const authUrl = new URL(AUTH_ENDPOINT);
  
  authUrl.searchParams.set('client_key', clientKey);
  authUrl.searchParams.set('scope', 'user.info.basic,video.upload,video.publish');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('state', Math.random().toString(36).substring(2));

  return redirect(authUrl.toString());
};
