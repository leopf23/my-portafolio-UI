import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define textStroke and colors here
      textStroke: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
      },
      colors: {
        black: '#000',
        blue:  '#03249C',
        blueDark: '#1B1B22',
        blueText: '#3D9AF4',
        white: '#fff',
      },
      // Define scrollSnapStop here
      scrollSnapStop: {
        always: 'always',
      },
      // Define background images here
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-image': "url('https://example.com/your-image.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
        },
        '.text-stroke-blue': {
          '-webkit-text-stroke-color': '#03249C',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};

export default config;
