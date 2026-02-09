// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         sidebar: {
//           DEFAULT: "hsl(var(--sidebar-background))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//         teal: {
//           50: "#f0fdfa",
//           100: "#ccfbf1",
//           200: "#99f6e4",
//           300: "#5eead4",
//           400: "#2dd4bf",
//           500: "#14b8a6",
//           600: "#0d9488",
//           700: "#0f766e",
//           800: "#115e59",
//           900: "#134e4a",
//         },
//         gold: {
//           50: "#fffbeb",
//           100: "#fef3c7",
//           200: "#fde68a",
//           300: "#fcd34d",
//           400: "#fbbf24",
//           500: "#d4af37",
//           600: "#b8942f",
//           700: "#92400e",
//           800: "#78350f",
//           900: "#451a03",
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "system-ui", "sans-serif"],
//         serif: ["Playfair Display", "Georgia", "serif"],
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "fade-in": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "fade-in-left": {
//           "0%": { opacity: "0", transform: "translateX(-30px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "fade-in-right": {
//           "0%": { opacity: "0", transform: "translateX(30px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "scale-in": {
//           "0%": { opacity: "0", transform: "scale(0.95)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in": "fade-in 0.6s ease-out forwards",
//         "fade-in-left": "fade-in-left 0.6s ease-out forwards",
//         "fade-in-right": "fade-in-right 0.6s ease-out forwards",
//         "scale-in": "scale-in 0.5s ease-out forwards",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d4af37",
          600: "#b8942f",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Add text animation keyframes here
        "letter-reveal": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "word-flow": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(100, 255, 218, 0.8), 0 0 30px rgba(100, 255, 218, 0.4)",
          },
        },
        "typewriter": {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        "blink-caret": {
          "from, to": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "currentColor",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        // Add text animation utilities here
        "letter-reveal": "letter-reveal 0.6s ease-out forwards",
        "word-flow": "word-flow 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        "gradient-shift": "gradient-shift 2s ease infinite",
        "text-glow": "text-glow 2s ease-in-out infinite",
        "typewriter": "typewriter 3.5s steps(40, end)",
        "blink-caret": "blink-caret 0.75s step-end infinite",
      },
      // Add background gradient utilities
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b)",
        "gradient-text-alt": "linear-gradient(90deg, #64ffda, #00b4d8, #0077b6)",
        "gradient-text-gold": "linear-gradient(90deg, #fbbf24, #d4af37, #b8942f)",
        "gradient-text-teal": "linear-gradient(90deg, #5eead4, #2dd4bf, #14b8a6)",
      },
      // Add text gradient utilities
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;