/* empty css                                     */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_oNzcvkI7.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_JOumjzaS.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - TikTok Creator Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-16 px-6 md:px-12"> <h1 class="text-4xl font-black mb-8">Privacy Policy</h1> <div class="prose prose-lg prose-invert max-w-none text-gray-400 leading-relaxed space-y-6"> <section> <h2 class="text-2xl font-bold text-white mb-4">1. Data Collection and Usage</h2> <p>
TikTok Creator Manager ("we", "us", or "our") is committed to protecting user privacy. Information obtained through the TikTok API is used solely to provide our core services.
</p> <div class="bg-red-500/10 border-l-4 border-tiktok-primary p-4 my-4 text-gray-300"> <p class="font-bold text-tiktok-primary text-lg">Important Declaration:</p> <ul class="list-disc ml-6 mt-2 space-y-1"> <li>We only request video upload permissions authorized by the user.</li> <li>We <strong>do not store</strong> any of your private sensitive data.</li> <li>We <strong>do not scrape</strong> your personal privacy information.</li> <li>All API calls strictly follow real-time user authorization.</li> </ul> </div> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">2. TikTok API Data Usage</h2> <p>
Our purpose for using the TikTok API is to allow users to conveniently manage and upload video content.
</p> <p>
- <strong>Video Upload:</strong> Only when a user actively initiates an upload task, we use the API to sync the video to the user's TikTok account.<br>
- <strong>Authentication:</strong> We use OAuth 2.0 for authentication to ensure that only the user themselves can operate their account.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">3. Data Security</h2> <p>
We do not sell any of your data to third parties. We take necessary technical measures to ensure the security of API interactions.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">4. Contact Us</h2> <p>
If you have any questions about our privacy policy, please contact our team.
</p> </section> </div> </div> ` })}`;
}, "D:/Projects/TKU/src/pages/privacy.astro", void 0);

const $$file = "D:/Projects/TKU/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
