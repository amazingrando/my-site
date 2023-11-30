/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        randyGray: '#767676',
        youtube: '#FF0000',
        linkedin: '#0077B5',
        github: '#181717',
        ttrpg: '#922A1E',
        email: '#3366FF',
        almostBlack: '#282828',
        speaking: {
          DEFAULT: '#181313',
          dark: '#181313',
          textHighlight: '#C7E7D0',
        },
      },
      backgroundImage: {
        speakingVideoGradient:
          'linear-gradient(116deg, rgba(255, 255, 255, 0.00) 13.87%, rgba(255, 255, 255, 0.60) 47.51%, rgba(255, 255, 255, 0.00) 80.99%)',
        speakingVideoGradientHover:
          'linear-gradient(116deg, rgba(255, 255, 255, 0.00) 33.87%, rgba(255, 255, 255, 0.60) 67.51%, rgba(255, 255, 255, 0.00) 100%)',
      },
      boxShadow: {
        speakingVideo:
          '0px 4px 2px 0px rgba(255, 255, 255, 0.40) inset, 0px -4px 2px 0px rgba(0, 0, 0, 0.50) inset',
      },
      fontFamily: {
        base: ['GeneralSans-Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
