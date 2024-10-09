/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "netflix-bg": "url('/src/utilities/images/netflix.jpg')",
      },
    },
  },
  plugins: [],
};
