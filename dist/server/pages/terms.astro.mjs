/* empty css                                     */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oNzcvkI7.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_JOumjzaS.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service - TikTok Creator Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-16 px-6 md:px-12"> <h1 class="text-4xl font-black mb-8">Terms of Service</h1> <div class="prose prose-lg prose-invert max-w-none text-gray-400 leading-relaxed space-y-6"> <section> <h2 class="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2> <p>
By accessing tk.carlifestore.com and its services, you agree to be bound by these Terms of Service.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">2. Description of Service</h2> <p>
TikTok Creator Manager is an assistant creation tool that allows users to upload and manage videos via the TikTok API.
</p> <div class="bg-blue-500/10 border-l-4 border-blue-500 p-4 my-4 text-gray-300"> <p class="font-bold text-blue-400">API Compliance:</p> <p class="mt-2">
All features of this platform are built on top of the official TikTok API. We explicitly declare:
<br>• Used only for user-authorized video uploads.
<br>• Strictly adhere to TikTok Developer Policies.
<br>• Do not use this tool for any form of harassment, infringement, or illegal activities.
</p> </div> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2> <p>
Users are solely responsible for the content they upload through this platform. You must own the copyright to the content or have obtained legal authorization.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2> <p>
To the maximum extent permitted by law, TikTok Creator Manager shall not be liable for any indirect, incidental, or special damages arising out of the use of or inability to use the service.
</p> </section> </div> </div> ` })}`;
}, "D:/Projects/TKU/src/pages/terms.astro", void 0);

const $$file = "D:/Projects/TKU/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
