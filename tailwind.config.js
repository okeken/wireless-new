module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      spacing: {
        '18': '5rem',
       },
      width: {
        '35': '340px',
      },
      fontSize: {
        '11': '44px',
        '12': '42px',
        '13': '30px',
        '14': '45px',
        '23': ['20px','1.2'],
        '31': ['31px','1.1'],
      },
      colors: {
        orange: {
          100: "#fff6f0",
          200: "#ffd1b3",
          300: "#ffaf7a",
          400: "#ff8b3d",
          500: "#ff6600",
          600: "#cc5200",
          700: "#993d00",
          800: "#662900",
          900: "#331400",
          1000: "#ff5400",
        },
        purple: {
          100: "#f6f0fe",
          200: "#d7bffc",
          300: "#bb93fb",
          400: "#9c62f9",
          500: "#8036f7",
          600: "#5c09e2",
          700: "#4407a7",
          800: "#2c046c",
          900: "#140231",
          1000: "#b121ce",
        },
        blu: {
          100: "#0036ff",
          200: "#0947c4",
        },
        grey: {
          10: "#101010",
          100: "#afafaf",
        },
        green: {
          100: "#4c7c07",
        },
      },
    },
    container: {
      padding: {
        default: "1.5rem",
        sm: "1.5rem",
        lg: "1.5rem",
        xl: "0",
      },
    }, 
    whitespace: {
      nowrap: 'nowrap',
    }   
  },
  variants: {
    display: ["responsive", "group-hover", "hover"],
    rotate: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
}
