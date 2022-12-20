/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx, ts}"],
	theme: {
		colors: {
			navy: "#002e5d",
			white: "#FFFFFF",
			royal: "#003DA5",
			gray: "#e2dfdd",
			"btn-primary": "#0057b8",
			divider: "#0f5499",
			transparent: 'transparent'
		},
		fontFamily: {
			headings: [
				"HCo Ringside Narrow SSm",
				"Open Sans",
				"Helvetica",
				"Arial",
				"sans-serif",
			],
			body: [
				"Public Sans",
				"Noto Sans",
				"Open Sans",
				"Helvetica",
				"Arial",
				"sans-serif",
			],
		},
		extend: {
			boxShadow: {
				'bottom': '0 0 10px rgba(0,0,0,.16)'
			},
			content: {
				'pipe': '|'
			}
		},
	},
	prefix: "byu-",
	important: true,
	plugins: [],
};
