/** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {
         colors: {
           brown: {
             300: '#8B4513', // Saddle brown for bot messages
           },
           beige: {
             100: '#F5F5DC', // Beige for settings/account backgrounds
           },
         },
       },
     },
     plugins: [],
   };