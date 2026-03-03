import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1440px",
      laptop: "1024px",
      tablet: "767px",
      mobile: "375px",
    },
    container: {
      screens: {
        desktop: '1440px',
        laptop: '1024px',
        tablet: '100%',
        mobile: '100%',
      },
      center: true,
      padding: {
        DEFAULT: '17.5px',
        tablet: '100px',
        laptop: '100px',
        desktop: '200px',
      },
    },
    fontFamily: {
      body: [
        "Roboto",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Roboto",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      backgroundImage: {
        'blue-gradient':
            'linear-gradient(86.64deg, #3C6DF3 1.11%, #3CD2F3 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857', // Основной зелёный из референса
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c', // Оранжевый/терракотовый
          500: '#f97316',
          600: '#ea580c',
        },
        cream: {
          50: '#fafaf9', // stone-50
          100: '#f5f5f4', // stone-100
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
