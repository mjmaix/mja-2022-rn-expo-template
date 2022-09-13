module.exports = {
  extends: [
    '@react-native-community',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import', 'unused-imports'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        typescript: true,
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/no-unstable-nested-components': [1, { allowAsProps: true }],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
