/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {


        'xs': '300px',
        // => @media (min-width: 640px) { ... }

        'mini': '480px',
        // => @media (min-width: 640px) { ... }

        'tab': '600px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '900px',
        // => @media (min-width: 640px) { ... }
        
        'xl': '1026px',
        // => @media (min-width: 1026px) { ... }


        'max': '680px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
        '1xl': '1350px',
        '1xxl':'1400px',
        '3xl':'1736px',
        '4xl':'1936px',
        '5xl':'2136px',
        '6xl':'2336px',
        '7xl':'2560px',
        '8xl':'3136px',
        // 'xs': '450px',
      },

      colors: {
        "clr": 'rgb(30,42,83)',
        "clr2": '#F0F5FF',
        "clr3": '#025EFE',
        "clr4": '#EFF5F9',
     
      },
    },
  },
  plugins: [],
}