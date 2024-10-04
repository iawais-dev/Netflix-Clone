/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ss': '460px',
      'smm': '543px',
      'ssm': '600px',
      'sm': '640px',
      'smx': '714px',
      'md': '768px',
      'mdls': '900px',
      'mdl': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'Gradient': 'linear-gradient(360deg, rgba(0, 0, 0, 0.8500) 8.000%, rgba(0, 0, 0, 0.8465) 15.67%, rgba(0, 0, 0, 0.8361) 23.33%, rgba(0, 0, 0, 0.8187) 31.00%, rgba(0, 0, 0, 0.7944) 38.67%, rgba(0, 0, 0, 0.7632) 46.33%, rgba(0, 0, 0, 0.7250) 54.00%, rgba(0, 0, 0, 0.6868) 61.67%, rgba(0, 0, 0, 0.6556) 69.33%, rgba(0, 0, 0, 0.6312) 77.00%, rgba(0, 0, 0, 0.6139) 84.67%, rgba(0, 0, 0, 0.6035) 92.33%, rgba(0, 0, 0, 0.6000) 100.0%);',
    },
        extend: {
          aspectRatio: {
            '16': '16',
            '9': '9',
          },
        },
  },
  plugins: [
     require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}