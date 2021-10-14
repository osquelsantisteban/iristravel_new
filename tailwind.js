module.exports = {
  important: true,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
        blue_iristravel: "#21285E",        
        darkblue_iristravel: "#1D1A39" 
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
      screens: {
        xs: "448px",
      },
      width: {
        "100x20": "calc(100% - 20px)",
        "100x50": "calc(100% - 50px)",
        "100x60": "calc(100% - 60px)",
        "100x70": "calc(100% - 70px)",
        "100x80": "calc(100% - 80px)",
        "100x90": "calc(100% - 90px)",
        "70x100": "calc(70% - 100px)",
      },
      fontSize: {
        "10xl": "100px !important",
      },
      fontFamily: {
        DIN: ["DINPro"],
        "DIN-Bold": ["DINPro-Bold"],
        "DIN-Medium": ["DINPro-Medium"],
        Clarissa: ["Clarissa"],
      },
      boxShadow: {
        "top": "0 -10px 10px var(--dark-blue)",
        "round": "0 0 10px var(--dark-blue)",
        "h-blue-lg": "8px 8px 8px var(--dark-blue)",
        "h-hover-blue-lg": "3px 3px 8px var(--dark-blue)",
        "h-blue-md": "5px 5px 5px #1D1A39",
        "h-hover-blue-md": "2px 2px 5px var(--dark-blue)",
      },
      backgroundImage: {
        'blue-180': 'linear-gradient(180deg, rgba(32,38,88,1) 0%, rgba(32,38,88,1) 36%, rgba(36,54,131,1) 100%)',
        'blue-360': 'linear-gradient(360deg, rgba(32,38,88,1) 0%, rgba(32,38,88,1) 36%, rgba(36,54,131,1) 100%)'
      },
      backgroundColor: () => ({
        dark: "#000",
        orange: "#E4A91D",
        blue: "#232E6E",
        darkBlue: "#1D1A39",
        blueGray: "#E8EBF2",
      }),
      textColor: () => ({
        orange: "#E4A91D",
        blue: "#232E6E",
        darkBlue: "#1D1A39",
        darkGray: "var(--dark-gray)",
      }),
      borderColor: () => ({
        orange: "#E4A91D",
        blue: "#232E6E",
        darkBlue: "#1D1A39",
      }),
      borderRadius: {
        "4xl": "2.5rem",
        100: "10rem",
        75: "75px",
        65: "65px",
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
