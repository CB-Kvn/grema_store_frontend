import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sx:"250px",
      xxxs: "375px",
      xxs: "460px",
      xmd: "700px",
      ...defaultTheme.screens,
    },
    extends: {
      spacing: {
        "600px": "600px",
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [daisyui],
};
