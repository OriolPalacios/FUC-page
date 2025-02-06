/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      color: {
        institution: 'var(--institution-color)',
      },
      brightness: {
        60: '.6',
      },
      blur:{
        xs: '1.5px',
      },
      boxShadow: {
        'strong': '0 5px 10px 0 rgba(0, 0, 0, .5)',
      },
      grayscale: {
        40: '.4',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};