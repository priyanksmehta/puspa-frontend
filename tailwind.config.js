module.exports = {
    mode: "jit",
    purge: ["src/**/*.{svelte,ts,js,json,svg}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "cart-button": "#67c529",
                "website-background": "#d3ffd5",
                "footer-background": "#323748",
            },
            textColor: {
                "main-theme": "#67c529",
            },
            borderColor: {
                "main-theme": "#67c529",
            },
            backgroundImage: {
                "flower-pattern":
                    "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(patchouli.jpg)",
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
