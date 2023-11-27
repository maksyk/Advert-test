/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0d4cd3",
        "accent-secondary": "#1d5deb",
      },


    },
  },
  plugins: [],
}

