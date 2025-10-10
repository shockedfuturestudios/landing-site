// ESLint flat config wrapper to make ESLint v9 accept the existing, familiar rule set.
// Uses FlatCompat to translate legacy "extends" and plugin configs into the flat format.
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true,
});

module.exports = [
  // Files/patterns to ignore (replaces .eslintignore for ESLint v9 flat config)
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "public/**",
      "!.vite/**",
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
    ],
  },

  // Import plugin recommended configs via compat (exclude eslint:recommended; recommendedConfig option adds it)
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended"
  ),

  // Project rules and parser settings
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Provide the parser module (must expose parse/parseForESLint)
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      import: require("eslint-plugin-import"),
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "import/no-unresolved": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "jsx-a11y/anchor-is-valid": "off",
    },
  },

  // Allow require() in config files
  {
    files: ["eslint.config.cjs", ".eslintrc.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // Disable prop-types for TypeScript files (we use TS types)
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/prop-types": "off",
    },
  },
];
