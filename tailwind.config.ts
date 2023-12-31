import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pcolor':'#FAB400',
        'scolor':'rgba(62, 60, 60, 0.53)',
        'bcolor': 'linear-gradient(180deg, #827E7E 0%, #363535 51.56%, #2B2A2A 100%)',
      },
      screens: {
        'xs': '360px',
      },
    },
 
  },
  // plugins: [require("daisyui")],
}
export default config
