import globals from 'globals';
import {fixupPluginRules} from '@eslint/compat';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

const includedFiles = ['**/*.{js,ts,jsx,tsx}'];

export default [
    {
        ignores: [
            '**/node_modules/',
            '**/.git/',
            '**/.idea/',
            '**/dist/',
        ],
    },
    {
        languageOptions: {
            parserOptions: {ecmaFeatures: {jsx: true}},
            globals: {...globals.browser, ...globals.node},
        },
        settings: {
            react: {version: 'detect'},
        },
    },
    ...[pluginJs.configs.recommended, ...tsEslint.configs.recommended, pluginReactConfig].map(config => ({
        ...config,
        files: includedFiles,
    })),
    {
        plugins: {
            '@typescript-eslint': tsEslint.plugin,
            'react-hooks': fixupPluginRules(pluginReactHooks),
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
        },
        files: includedFiles,
    },
    eslintConfigPrettier,
];
