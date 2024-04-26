/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                vibes: ["Great Vibes", "cursive"],
                playfair: ["Playfair Display", "serif;"],
            },
        },
    },
    plugins: [],
};
