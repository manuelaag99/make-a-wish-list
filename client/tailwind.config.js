/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "var-1": "#E1FFE4",
        "var-2": "#FF5372",
        "var-2-hovered": "#FF7594",
        "var-2-disabled": "#FFA3B3",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "35": "35%",
        "95": "95%"
      }
    },
  },
  plugins: [],
}

