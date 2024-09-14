/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: false,
    bracketSameLine: true,
    arrowParens: 'avoid',
    overrides: [
        {
            files: '**/*.json',
            options: {tabWidth: 2},
        },
    ],
};

export default config;
