/** @type {import('tailwindcss').Config} */

import { fontFamily , screens} from "tailwindcss/defaultTheme";

let containerScreens = Object.assign({}, screens);
delete containerScreens["2xl"];
delete containerScreens["xl"];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: containerScreens
      },
      colors: {
        enveus: {
          primary: "rgb(105, 69, 253)",
          black: "rgb(18, 18, 18)",
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        enveus: ["WildBreathZelda", "var(--font-montserrat)", ...fontFamily.sans],
        menu: ["TrajanPro", "var(--font-montserrat)", ...fontFamily.sans]
      },
      backgroundImage: {
        main: "url(/assets/img/bg-main.jpg)"
      }
    },
  },
  plugins: [],
}
