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
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(105%, 0)" },
          "100%": { transform: "translate(-105%, 0)" },
        },
      },
    },
  },
  variants: {
    extend: { animation: ["hover", "focus"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
