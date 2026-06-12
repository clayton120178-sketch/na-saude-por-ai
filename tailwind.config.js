/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1F1C3D',
          700: '#2D2A55',
          500: '#4A4778',
        },
        teal: {
          600: '#15A8A8',
          500: '#1BC5C5',
          50: '#E6F8F8',
        },
        sand: {
          200: '#E8E6E1',
          100: '#F3F1EC',
        },
        champagne: '#EFE7DC',
        ink: {
          DEFAULT: '#211F33',
          soft: '#5B5870',
        },
        line: '#E3E1DC',
        bg: '#FAF9F6',
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        script: ['Caveat', 'cursive'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        display: 'clamp(2.25rem, 6vw, 4rem)',
        h2: 'clamp(1.75rem, 4vw, 2.5rem)',
        h3: 'clamp(1.25rem, 2.5vw, 1.5rem)',
        lead: 'clamp(1.05rem, 1.6vw, 1.25rem)',
        small: '0.875rem',
        eyebrow: '0.75rem',
      },
      borderRadius: {
        sm: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(31,28,61,0.04), 0 1px 3px rgba(31,28,61,0.06)',
        md: '0 4px 12px rgba(31,28,61,0.06), 0 2px 6px rgba(31,28,61,0.04)',
        lg: '0 12px 32px rgba(31,28,61,0.10), 0 4px 12px rgba(31,28,61,0.06)',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
}
