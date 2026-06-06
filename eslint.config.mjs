import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const eslintConfig = [
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'dist/**',
            'public/**',
            'coverage/**',
            '*.config.js',
            '*.config.mjs',
            '*.config.ts',
            'next-env.d.ts',
            '.env*',
            '.git/**',
            '.husky/**',
            'scripts/**',
        ],
    },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: {
            '@next/next': nextPlugin,
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                node: true,
                es2022: true,
                React: true,
                JSX: true,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,

            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                },
            ],

            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-no-useless-fragment': 'warn',
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    ignoreCase: true,
                    reservedFirst: true,
                },
            ],

            ...reactHooksPlugin.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'warn',

            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'warn',
            'no-template-curly-in-string': 'error',
            'prefer-const': 'error',
            'prefer-template': 'warn',
            curly: ['error', 'all'],
            eqeqeq: ['error', 'always'],
            'no-else-return': 'warn',
            'object-shorthand': ['warn', 'always'],
        },
    },
];

export default eslintConfig;
