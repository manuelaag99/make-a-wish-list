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
        "var-3": "#306642",
      },
      textColor: {
        "var-1": "#E1FFE4",
        "var-2": "#FF5372",
        "var-2-hovered": "#FF7594",
        "var-2-disabled": "#FFA3B3",
        "var-3": "#306642",
      },
      fontSize: {
        "date": "0.7rem",
        "smAndUpTitle": "1.5rem",
        "smAndUpText": "1.0rem",
        "smAndUpSmallText": "0.8rem",
        "mobileTitle": "1.0rem",
        "mobileText": "0.8rem",
        "mobileSmallText": "0.6rem"
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
      },
      zIndex: {
        "10": "10",
        "15": "15",
        "20": "20",
        "25": "25",
        "30": "30",
        "35": "35",
        "40": "40",
        "45": "45",
        "50": "50",
        "55": "55",
        "60": "60",
        "65": "65",
        "70": "70",
        "75": "75",
        "80": "80",
        "85": "85",
        "90": "90",
        "95": "95",
        "100": "100",
        "105": "105",
        "110": "110"
      }
    },
  },
  plugins: [],
}

