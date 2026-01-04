export { renderers } from '../../renderers.mjs';

const GET = async ({ redirect }) => {
  const clientKey = "sbawpvobe4ptau2q1n";
  const redirectUri = "https://tk.carlifestore.com/api/callback";
  const authUrl = new URL("https://www.tiktok.com/v2/auth/authorize/");
  authUrl.searchParams.set("client_key", clientKey);
  authUrl.searchParams.set("scope", "user.info.basic,video.upload,video.publish");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("state", Math.random().toString(36).substring(2));
  return redirect(authUrl.toString());
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
