/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-50': '#fef6ee',
        'primary-100': '#feebd6',
        'primary-200': '#fcd2ac',
        'primary-300': '#f9b278',
        'primary-400': '#f68841',
        'primary-500': '#f3671c',
        'primary-600': '#d44811',
        'primary-700': '#bd3911',
        'primary-800': '#962e16',
        'primary-900': '#792815',
        'primary-950': '#411209',
      },
      backgroundColor: {
        'primary-50': '#fef6ee',
        'primary-100': '#feebd6',
        'primary-200': '#fcd2ac',
        'primary-300': '#f9b278',
        'primary-400': '#f68841',
        'primary-500': '#f3671c',
        'primary-600': '#d44811',
        'primary-700': '#bd3911',
        'primary-800': '#962e16',
        'primary-900': '#792815',
        'primary-950': '#411209',
      },
      dropShadow: {
        'black-10': '0 0 10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'Open-sans': ["Open Sans", 'sans-serif'],
        "Nunito": ["Nunito", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
