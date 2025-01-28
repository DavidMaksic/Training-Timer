/** @type {import('tailwindcss').Config} */
export default {
   content: ['src/**/*.{html,js,jsx}'],
   theme: {
      extend: {
         boxShadow: {
            lime: '0 0 70px #d9f99d',
         },
         scale: {
            '-100': '-1',
         },
         colors: {
            yellow_paused: '#e29f0d',
            yellow_text_paused: '#ffcd37',
            violet_paused: '#9971f0',
            violet_text_paused: '#b3a5ec',
         },
      },
      screens: {
         '2xl': { max: '1535px' },
         xl: { max: '1279px' },
         lg: { max: '1023px' },
         md: { max: '767px' },
         sm: { max: '639px' },
      },
   },
   plugins: [],
};
