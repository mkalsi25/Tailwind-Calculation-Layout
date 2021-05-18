module.exports = {
  // mode: "jit",
  purge: { enabled: true, content: ["./src/**.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      colors: {
        primary: "#24201B",
        heading: "#BEA68E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
