/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0.25rem",
        x20: "1.3rem",
      },
      colors: {
        warning: "#FF9900",
        "primary-800": "rgba(74, 109, 255, 1)",
        "primary-900": "#4A6DFF",
        "secondary-200": "#BFC0CB",
        "secondary-300": "rgba(54, 56, 83, 0.5)",
        "secondary-600": "#6A6C87",
        "secondary-700": "rgba(85, 87, 117, 1)",
        "secondary-800": "rgba(63, 66, 100, 1)",
        "secondary-900": "#3F4264",
        "red-trash": "rgba(255, 0, 0, 0.8)",
        "red-text": "#FF0000CC",
      },
      fontFamily: {
        sans: ["iranYekan"],
      },
      fontSize: {
        xxs: "0.3rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
