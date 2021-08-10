module.exports = {
    purge:
        // https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        // only purgecss in production to speed up development build time
        ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    variants: {},
    plugins: [],
};
