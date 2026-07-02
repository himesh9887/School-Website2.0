/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#2563EB',
        accent: '#F59E0B',
        success: '#22C55E',
        danger: '#EF4444',
        background: '#F8FAFC',
        dark: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
        alternate: '#EFF6FF',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 23, 42, 0.12)',
        soft: '0 16px 40px rgba(30, 64, 175, 0.10)',
        glow: '0 18px 38px rgba(37, 99, 235, 0.30)',
      },
      borderRadius: {
        card: '24px',
        button: '16px',
        input: '16px',
      },
      backgroundImage: {
        royal: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
        gold: 'linear-gradient(135deg, #F59E0B 0%, #FACC15 100%)',
      },
    },
  },
  plugins: [],
};
