module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            screens : {
                default: '100%',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1280px'
            }
        }
    },
    plugins: [],
}
