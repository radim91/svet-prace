/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
            width: {
                '1/5': '20%',
            },
            height: {
                '1/5': '20%',
            },
            inset: {
                '1/5': '20%',
            }
        },
    },
    plugins: [],
};
