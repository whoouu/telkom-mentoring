/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scrolling-down': {
          '100%': {
            transform: "translateY(-8rem)"
          }
        },
        'scrolling-up': {
          '0%': {
            transform: "translateY(-8rem)"
          },
          '100%': {
            transform: "translateY(0)"
          }
        },
      },
      animation: {
        'scroll-down': "scrolling-down .4s forwards",
        'scroll-up': "scrolling-up .4s forwards",
      },
      backgroundImage: {
        'image-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 65.91%, rgba(0, 0, 0, 0.87) 100%)"
      },
      colors: {
        transparent: "#FFFFFF1A",
        red: {
          100: "#FFDFDF",
          200: "#FC9999",
          300: "#FC7474",
          400: "#F15C59",
          500: "#E52424",
          600: "#B81D1D",
          700: "#8C1616",
          800: "#610F0F",
          900: "#380909",
        },
        yellow: {
          100: "#FEF8D0",
          200: "#FEF2A2",
          300: "#FEEC73",
          400: "#FEE645",
          500: "#FEDD00",
          600: "#E5C700",
          700: "#AD9700",
          800: "#6C5E00",
          900: "#3D3500",
        },
        blue: {
          100: "#E0EFFF",
          200: "#A3CFFF",
          300: "#5BAAFF",
          400: "#007BFF",
          500: "#0064D2",
          600: "#004FA7",
          700: "#003D81",
          800: "#002A58",
          900: "#001833",
        },
        green: {
          100: "#E2FBED",
          200: "#A8E5C4",
          300: "#66CC94",
          400: "#3CCC7D",
          500: "#0BAE54",
          600: "#088942",
          700: "#076A33",
          800: "#054A24",
          900: "#022612",
        },
        neutral: {
          50: "#F8F9FD",
          100: "#F8F9FD",
          200: "#D8DCE8",
          300: "#C0C3CF",
          400: "#AEB2BE",
          500: "#8C909E",
          600: "#71747D",
          700: "#4D4F56",
          800: "#303135",
          900: "#18191B"
        },
        turqouise: {
          100: "#E0F1F5",
          200: "#9FDFED",
          300: "#7CD4E4",
          400: "#30B6C5",
          500: "#10A4AF",
          600: "#148692",
          700: "#174F59",
          800: "#14353C",
          900: "#092227"
        }
      }
    },
  },
  plugins: [],
}