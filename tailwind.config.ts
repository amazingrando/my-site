import type { Config } from "tailwindcss";

const colors = {
  blue: {
    100: 'hsla(223, 90%, 96%, 1)',
    200: 'hsla(225, 95%, 92%, 1)',
    300: 'hsla(225, 95%, 85%, 1)',
    400: 'hsla(224, 95%, 77%, 1)',
    500: 'hsla(224, 94%, 69%, 1)',
    600: 'hsla(225, 94%, 60%, 1)',
    700: 'hsla(225, 66%, 48%, 1)',
    800: 'hsla(225, 66%, 37%, 1)',
    900: 'hsla(224, 66%, 25%, 1)',
    1000: 'hsla(225, 65%, 15%, 1)'
  },
  orange: {
    100: 'hsla(35, 100%, 95%, 1)',
    200: 'hsla(36, 100%, 91%, 1)',
    300: 'hsla(36, 100%, 81%, 1)',
    400: 'hsla(35, 100%, 72%, 1)',
    500: 'hsla(36, 100%, 63%, 1)',
    600: 'hsla(36, 100%, 54%, 1)',
    700: 'hsla(36, 87%, 43%, 1)',
    800: 'hsla(35, 87%, 32%, 1)',
    900: 'hsla(36, 87%, 21%, 1)',
    1000: 'hsla(36, 85%, 11%, 1)'
  },
  ash: {
		50: 'hsla(240, 7%, 98%, 1)',
    100: 'hsla(240, 7%, 95%, 1)',
    200: 'hsla(240, 7%, 89%, 1)',
    300: 'hsla(240, 7%, 77%, 1)',
    400: 'hsla(240, 6%, 66%, 1)',
    500: 'hsla(240, 6%, 55%, 1)',
    600: 'hsla(240, 9%, 43%, 1)',
    700: 'hsla(240, 8%, 35%, 1)',
    800: 'hsla(240, 8%, 26%, 1)',
    900: 'hsla(240, 9%, 17%, 1)',
    1000: 'hsla(240, 9%, 9%, 1)'
  },
  'adamantine-blue': {
    100: 'hsla(205, 100%, 96%, 1)',
    200: 'hsla(205, 100%, 93%, 1)',
    300: 'hsla(205, 100%, 85%, 1)',
    400: 'hsla(205, 100%, 78%, 1)',
    500: 'hsla(205, 100%, 70%, 1)',
    600: 'hsla(205, 100%, 63%, 1)',
    700: 'hsla(205, 60%, 50%, 1)',
    800: 'hsla(205, 59%, 38%, 1)',
    900: 'hsla(205, 59%, 25%, 1)',
    1000: 'hsla(205, 59%, 13%, 1)'
  },
  yellow: {
    50: 'hsla(52, 92%, 95%, 1)',
    100: 'hsla(51, 91%, 87%, 1)',
    200: 'hsla(51, 89%, 79%, 1)',
    300: 'hsla(51, 88%, 71%, 1)',
    400: 'hsla(50, 87%, 63%, 1)',
    500: 'hsla(50, 86%, 55%, 1)',
    600: 'hsla(50, 84%, 47%, 1)',
    700: 'hsla(50, 83%, 38%, 1)',
    800: 'hsla(50, 81%, 30%, 1)',
    900: 'hsla(50, 79%, 22%, 1)',
    1000: 'hsla(50, 77%, 14%, 1)'
  },
};

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      animation: {
        comeInOut: 'comeInOut 700ms forwards;',
        spin: 'spin 1000ms linear forwards',
      },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
        highlight: 'var(--highlight)',
        loop: 'var(--loop)',
				...colors
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			fontFamily: {
        base: ['GeneralSans-Variable', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        comeInOut: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        }
      },
      zIndex: {
        'header': '100',
      }
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
