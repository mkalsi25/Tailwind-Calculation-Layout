module.exports = {
  // mode: "jit",
  purge: { enabled: true, content: ["./src/**.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
