/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs: "380px",
      sm: "570px",
      md: "760px",
      lg: "970px",
      xl: "1240px"
    },
    extend: {
      colors: {
        BlueTeal: '#007E85',
        Yashil: "#6EAB36"
      },
    },
    fontFamily:{
      "LexendTera": ["Lexend Tera", "sans-serif"],
      "Lat":["Lato", "sans-serif"]
    },
    container:{
       center: true,
       padding: "20px"     
    }
  },
  plugins: [],
}