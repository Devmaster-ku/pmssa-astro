/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#006664',
          dark: '#004847',
          light: '#e0f2f1'
        },
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#9a7a2e',
          light: '#fdf3d7'
        },
        gree: {
          DEFAULT: '#b2bb1e',
          dark: '#214d4a',
          light: '#e0f2f1'
        },
        text: {
          DEFAULT: '#1a2e2e',
          muted: 'rgba(255,255,255,0.7)'
        }
      },
      fontFamily: {
        sarabun: ['Sarabun', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
