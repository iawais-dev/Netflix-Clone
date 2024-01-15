/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'ss': '460px',
      'smm': '543px',
      'ssm': '600px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
 
      'smx': '714px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdl': '960px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      
    },
  },
  plugins: [],
}

