/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			padding: "6rem",
		},
		container2: {
			padding: "20px",
		},

		extend: {
			animation: {
				marquee: "marquee 70s linear infinite",
				marquee2: "marquee2 70s linear infinite",
				marquee3: "marquee 25s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
	},
	plugins: [],
};
