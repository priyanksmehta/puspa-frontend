module.exports = {
    mode: "jit",
    purge: ["src/**/*.{svelte,ts,js,json}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "cart-button": "#67c529",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/typography"),
    ],
};
