/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    boxShadow: {
         speci : '0 0 15px rgb(226, 227, 228)',
         blacki : '0 0 20px rgb(0, 0, 0)',
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      grayBlue2: "#191D2E"
    },},
  },
  plugins: [],
}
