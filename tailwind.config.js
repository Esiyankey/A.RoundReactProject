/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      },
    },
  },
  plugins: [],
}

