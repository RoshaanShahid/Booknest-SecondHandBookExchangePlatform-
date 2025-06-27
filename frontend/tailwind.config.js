/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#091e65',      // Deep Blue
        'accent': '#FBBF24',      // Vibrant Gold/Yellow (Amber 400)
        'light-bg': '#F8F9FA',   // Off-White Background
        'text-dark': '#1F2937',   // Dark Gray for text
        'text-light': '#6B7281',  // Lighter Gray for secondary text
        'border-color': '#E5E7EB', // Standard border color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Keep Inter as the default font
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
