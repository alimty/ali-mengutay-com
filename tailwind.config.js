/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#212224',
        'card': '#333639',
        'card-hover': '#3c3f42',
        'accent': '#FFC148',
        'arrow': 'rgb(224,223,220)',
        'text-secondary': '#888888',
      },
      backgroundImage: {
        'gradient-fade': 'linear-gradient(to top, rgba(28, 28, 28, 0.2), transparent)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
