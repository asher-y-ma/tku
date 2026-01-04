import { e as createAstro, f as createComponent, h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate } from './astro/server_oNzcvkI7.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://tk.carlifestore.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description" content="TikTok Creator Manager"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-950 text-white font-sans min-h-screen flex flex-col"> <nav class="border-b border-gray-800 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-gray-950 z-50"> <a href="/" class="flex items-center gap-2"> <span class="text-2xl font-black tracking-tighter text-white">
TikTok <span class="text-tiktok-primary">Creator Manager</span> </span> </a> <div class="hidden md:flex gap-6 font-semibold"> <a href="/" class="hover:text-tiktok-primary transition-colors">Home</a> <a href="/privacy" class="hover:text-tiktok-primary transition-colors text-gray-300">Privacy Policy</a> <a href="/terms" class="hover:text-tiktok-primary transition-colors text-gray-300">Terms of Service</a> </div> </nav> <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-gray-900 border-t border-gray-800 py-12 px-6 md:px-12"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"> <div class="text-gray-500 text-sm text-center md:text-left"> <p>&copy; 2026 TikTok Creator Manager. All rights reserved.</p> <p class="mt-2">Deployed at tk.carlifestore.com</p> </div> <div class="flex gap-8 text-sm font-medium text-gray-400"> <a href="/privacy" class="hover:underline">Privacy Policy</a> <a href="/terms" class="hover:underline">Terms of Service</a> </div> </div> </footer> </body></html>`;
}, "D:/Projects/TKU/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
