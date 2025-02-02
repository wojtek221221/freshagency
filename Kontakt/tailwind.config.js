/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'scale-up': 'scale-up 6s ease-in-out infinite alternate',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0E0E0E',
        background2: '#0A0A0ABF',
        description1: '#FFFFFF',
        description2: '#909090',
        lights: '#957BFF',
      }
    },
    
  },
  plugins: [],
}