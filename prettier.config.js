// @ts-check
/** @type {import("prettier").Config} */
export default {
    printWidth: 70,
    tabWidth: 4,
    semi: true,
    arrowParens: "avoid",

    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
