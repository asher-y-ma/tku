/* empty css                                     */
import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_oNzcvkI7.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_JOumjzaS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tk.carlifestore.com");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("tk_access_token")?.value;
  const openId = Astro2.cookies.get("tk_open_id")?.value;
  if (!accessToken) {
    return Astro2.redirect("/");
  }
  const publishHistory = [
    { id: 1, title: "\u6211\u7684\u7CBE\u5F69\u65F6\u523B #TikTok", status: "Published", date: "2026-01-03 14:20" },
    { id: 2, title: "\u65B0\u5E74\u5FEB\u4E50\uFF01\u{1F389}", status: "Published", date: "2026-01-01 09:15" },
    { id: 3, title: "\u4EA7\u54C1\u6F14\u793A\u89C6\u9891", status: "Failed", date: "2025-12-30 18:45", error: "Video too large" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard - TikTok Creator Manager" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-6 md:px-12 py-12"> <header class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"> <div> <h1 class="text-4xl font-black">Creator Dashboard</h1> <p class="text-gray-500 mt-2">Connection Status: <span class="text-green-500 font-semibold">Authorized (ID: ${openId?.substring(0, 8)}...)</span></p> </div> <div class="flex gap-4"> <a href="/api/auth" class="px-6 py-2 border border-gray-800 rounded-full text-sm font-bold hover:bg-gray-900 transition-colors">Re-authorize</a> </div> </header> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <!-- Upload Section --> <div class="lg:col-span-2 space-y-8"> <section class="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-tiktok-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
Publish New Video
</h2> <form id="uploadForm" class="space-y-6"> <div class="space-y-2"> <label class="block text-sm font-bold text-gray-400">Select Video File (.mp4)</label> <div id="dropZone" class="border-2 border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-tiktok-primary transition-colors cursor-pointer bg-gray-950/50 group"> <input type="file" id="videoFile" name="video" accept=".mp4" class="hidden" required> <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 group-hover:text-tiktok-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="12" y1="12" x2="12" y2="12"></line></svg> </div> <p id="fileName" class="font-medium text-gray-300">Click or Drag & Drop</p> <p class="text-xs text-gray-500 mt-1">Up to 1GB, .mp4 format</p> </div> </div> <div class="space-y-2"> <label for="caption" class="block text-sm font-bold text-gray-400">Caption</label> <textarea id="caption" name="caption" rows="4" maxlength="2000" class="w-full px-4 py-3 rounded-xl border border-gray-800 bg-gray-950 text-white focus:border-tiktok-primary focus:ring-1 focus:ring-tiktok-primary outline-none transition-all resize-none" placeholder="Write a catchy description for your video..."></textarea> <div class="text-right text-xs text-gray-500" id="charCount">0 / 2000</div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-2"> <label for="privacy" class="block text-sm font-bold text-gray-400">Privacy Settings</label> <select id="privacy" name="privacy" class="w-full px-4 py-3 rounded-xl border border-gray-800 bg-gray-950 text-white focus:border-tiktok-primary outline-none appearance-none cursor-pointer"> <option value="PUBLIC_TO_EVERYONE">Public</option> <option value="MUTUAL_FOLLOW_FRIENDS">Friends</option> <option value="SELF_ONLY">Self</option> </select> </div> </div> <button type="submit" id="submitBtn" class="w-full py-4 bg-tiktok-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-red-900/20 hover:brightness-110 transition-all flex items-center justify-center gap-2">
Publish to TikTok
</button> </form> </section> </div> <!-- History & Stats Section --> <div class="space-y-8"> <section class="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm"> <h2 class="text-xl font-bold mb-6">Publish History</h2> <div class="space-y-6"> ${publishHistory.map((item) => renderTemplate`<div class="flex items-start gap-4 pb-6 border-b border-gray-800 last:border-0 last:pb-0"> <div${addAttribute(`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${item.status === "Published" ? "bg-green-400" : "bg-red-400"}`, "class")}></div> <div class="flex-grow min-w-0"> <h4 class="font-bold text-sm truncate text-gray-200">${item.title}</h4> <p class="text-xs text-gray-500 mt-1">${item.date}</p> ${item.error && renderTemplate`<p class="text-xs text-red-500 mt-1">${item.error}</p>`} </div> <span${addAttribute(`text-[10px] font-bold px-2 py-1 rounded uppercase ${item.status === "Published" ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`, "class")}> ${item.status} </span> </div>`)} </div> </section> <section class="bg-white text-black rounded-3xl p-8"> <h3 class="font-bold mb-2">Safety Tip</h3> <p class="text-sm text-gray-600 leading-relaxed">
All video uploads are sent directly to TikTok servers. We do not store your video files.
</p> </section> </div> </div> </div>  <div id="loadingOverlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] hidden flex-col items-center justify-center text-white"> <div class="w-12 h-12 border-4 border-white border-t-tiktok-primary rounded-full animate-spin mb-4"></div> <p class="font-bold text-xl" id="loadingText">视频发布中...</p> <p class="text-sm opacity-70 mt-2">请勿关闭页面，这可能需要几分钟时间</p> </div> ` })} ${renderScript($$result, "D:/Projects/TKU/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/TKU/src/pages/dashboard.astro", void 0);

const $$file = "D:/Projects/TKU/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
