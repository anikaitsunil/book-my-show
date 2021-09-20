module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        ani:
        {
          50: '#eaf7ea',
          100: '#d0dfd2',
          200: '#333333',
          300: '#9ab19b',
          400: '#7e9b80',
          500: '#648167',
          600: '#4d644f',
          700: '#364838',
          800: '#1e2c20',
          900: '#031103',
        },
        navCol:
          {
            50: '#f5edfd',
            100: '#d8cfe5',
            200: '#2b3148',
            300: '#a391ba',
            400: '#8872a6',
            500: '#6f588c',
            600: '#56456e',
            700: '#3e314f',
            800: '#333545',
            900: '#0e0817',
          }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
