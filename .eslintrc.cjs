module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // Vite resolves some aliases; disable unresolved import rule to avoid false positives
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { 'no-undef': 'off' },
    },
    {
      files: ['src/components/ui/**'],
      rules: { 'max-lines': 'off' },
    },
  ],
};
