import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        '3/5': '60%',
        '4/6': '66.666667%'
      }
    }
  },
  plugins: []
} satisfies Config
