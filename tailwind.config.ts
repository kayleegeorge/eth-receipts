import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray1: '#F3F3F3',
        gray2: '#D6D6D6',
        gray3: '#AAAAAA',
        gray4: '#777777',
        gray5: '#535353',
        positiveGreen: '#0CA01B',
      },
      fontFamily: {
        sans: ['var(--font-SF-Pro-Display)'],
        mono: ['var(--font-NeueMontreal)'],
      },
      dropShadow: {
        card: '0 4px 4px #F3F3F3',
      },
    },
  },
  plugins: [],
};
export default config;
