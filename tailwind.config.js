/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'inventory-sprite': "url('../public/inventory_sprite.png')"
      },
      boxShadow: {
        'selected': '0 0 10px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
