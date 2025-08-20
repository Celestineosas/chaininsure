import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class", 

  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["38px", "50px"],
      "3_5xl": ["45px", "55px"],
      "4xl": ["48px", "58px"],
      "5xl": ["65px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        calsans: ["Cal Sans", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          darkHover: colors.neutral[900],
        },
        background: {
          main: "#0d0d0d",
          card: "#191B1F",
          payment: "#E25E00",
          paymentDark: "#140800",
        },
        primary: "#ECEEFF",
        "coral-red": "#FFa28a",
        "blue": "#2196f3",
        "slate-gray": "#525866",
        "pale-brown": "#2E1109",
        "brown": "#9A391f",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        pro: "391px",
        1024: "1024px",
        640: "640px",
        se: "376px",
        iPadAir: "821px",
        s8: "362px",
        s20: "420px",
        430: "430px",
        414: "415px",
        412: "412px",
        980: "978px",
      },
        letterSpacing: {
        text: '-0.04em',
      },
      lineHeight: {
        text: '1',       
        'text-sm': '0.9' 
      },
    },
  },
  plugins: [],
};

