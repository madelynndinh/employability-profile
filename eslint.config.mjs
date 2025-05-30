import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      eslintConfigPrettier,
    ],
    plugins: {
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
