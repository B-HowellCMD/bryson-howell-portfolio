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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'retro': ['Orbitron', 'monospace'],
				'ps': ['Play', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				'retro-background': 'hsl(var(--retro-background))',
				'retro-surface': 'hsl(var(--retro-surface))',
				'retro-surface-alt': 'hsl(var(--retro-surface-alt))',
				'retro-border': 'hsl(var(--retro-border))',
				'retro-border-light': 'hsl(var(--retro-border-light))',
				'retro-purple': 'hsl(var(--retro-purple))',
				'retro-cyan': 'hsl(var(--retro-cyan))',
				'retro-pink': 'hsl(var(--retro-pink))',
				'retro-yellow': 'hsl(var(--retro-yellow))',
				'retro-green': 'hsl(var(--retro-green))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'neon-purple': 'var(--gradient-neon-purple)',
				'neon-cyan': 'var(--gradient-neon-cyan)',
				'neon-sunset': 'var(--gradient-neon-sunset)',
				'dark-surface': 'var(--gradient-dark-surface)',
				'glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'neon-purple': 'var(--shadow-neon-purple)',
				'neon-cyan': 'var(--shadow-neon-cyan)',
				'neon-pink': 'var(--shadow-neon-pink)',
				'glass': 'var(--shadow-glass)',
				'elevated': 'var(--shadow-elevated)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-retro': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-4px)',
					}
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'window-open': {
					'0%': {
						transform: 'scale(0.8) translateY(50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) translateY(0)',
						opacity: '1'
					}
				},
				'ps-boot': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 5px currentColor)',
						transform: 'scale(1)'
					},
					'50%': {
						filter: 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor)',
						transform: 'scale(1.05)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-10px) rotate(1deg)'
					},
					'66%': {
						transform: 'translateY(5px) rotate(-1deg)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-retro': 'bounce-retro 1s ease-in-out infinite',
				'blink': 'blink 1s infinite',
				'window-open': 'window-open 0.2s ease-out',
				'glow': 'glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
