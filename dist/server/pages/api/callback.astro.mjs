export { renderers } from '../../renderers.mjs';

const GET = async ({ request, redirect, cookies }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  if (error) {
    return new Response(`TikTok Auth Error: ${error}`, { status: 400 });
  }
  if (!code) {
    return new Response("No authorization code provided", { status: 400 });
  }
  const clientKey = "sbawpvobe4ptau2q1n";
  const clientSecret = "YiEeePWpz5ObfK1qpI8BawnsTstO3GUK";
  const redirectUri = "https://tk.carlifestore.com/api/callback";
  try {
    const tokenResponse = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache"
      },
      body: new URLSearchParams({
        client_key: clientKey || "",
        client_secret: clientSecret || "",
        code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
      })
    });
    const data = await tokenResponse.json();
    if (!tokenResponse.ok) {
      console.error("TikTok Token Exchange Error:", data);
      return new Response(`Failed to exchange token: ${JSON.stringify(data)}`, { status: 500 });
    }
    const { access_token, refresh_token, open_id } = data;
    cookies.set("tk_access_token", access_token, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: data.expires_in || 3600
    });
    cookies.set("tk_open_id", open_id, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 30 * 24 * 3600
      // 较长时间
    });
    if (refresh_token) {
      cookies.set("tk_refresh_token", refresh_token, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: data.refresh_expires_in || 30 * 24 * 3600
      });
    }
    return redirect("/dashboard");
  } catch (err) {
    console.error("Callback error:", err);
    return new Response("Internal Server Error during TikTok callback", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
