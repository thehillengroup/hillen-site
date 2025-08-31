/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00A9B7',
        // Darker accessible variants for text-on-primary buttons
        'primary-700': '#006A74',
        'primary-800': '#005A63',
        accent: '#FFA600',
        dark: '#004E59',
        bg: '#ffffff',
      },
    },
  },
  plugins: [],
};
