/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'expanding' : {
          '0%' : { transform : 'scale(0.95)'},
          '50%' : { transform : 'scale(1.1)'},
          '100%' : { transform : 'scale(0.95)'},
        },
        'appear' : {
          '0%' : {transform : 'translateY(100px)'},
          '100%' : {transform : 'translateY(0)'},
        }
      },
      animation:{
        'expanding' : 'expanding 1s linear infinite',
        'appear' : 'appear 0.3s linear 1',
      },
      backgroundImage: {
        'inventory-sprite': "url('../public/inventory_sprite.png')"
      },
      boxShadow: {
        'selected': '0 0 10px rgba(255, 255, 255, 0.5)',
        'object-cell': '0 0 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
