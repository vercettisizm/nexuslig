import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nxred: "#ef4444",
        nxdark: "#0b0b0d",
        nxgold: "#d4af37"
      }
    },
  },
  plugins: [],
} satisfies Config
