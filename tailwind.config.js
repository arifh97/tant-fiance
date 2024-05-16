const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'xs': '375px',
            'sm': '414px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1300px'
        },
        colors: {
            primary: '#00FFFF',
            secondary: '#0152FF',
            body: '#B2B0B9',
            bg: '#060706',
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent'
        },
        fontFamily: {
            main: ['General Sans', 'Roboto', 'Poppins']
        },
        backgroundImage: {
            'banner': "url('src/assets/img/banner-bg.png')",
        }
    },
    darkMode: "class",
    plugins: [nextui()],
}