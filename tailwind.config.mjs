/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#fe2c55',
          secondary: '#25f4ee',
          black: '#121212',
        }
      }
    },
  },
  plugins: [],
}
