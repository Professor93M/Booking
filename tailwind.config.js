const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                "tajawal-regular": "Tajawal-Regular",
                "tajawal-bold": "Tajawal-Bold",
                "tajawal-Black": "Tajawal-Black",
                "tajawal-light": "Tajawal-Light",
                "tajawal-extrabold": "Tajawal-ExtraBold",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
