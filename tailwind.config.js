const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        primary: {
          one: "#F75243",
          two: "#3AD4E0",
          three: "#0F2CE0",
          four: "#EC9BAF",
        },
        secondary: {
          DEFAULT: "#7F8E9D",
          dark: "#1E3354",
          light: "#C7CAD9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
