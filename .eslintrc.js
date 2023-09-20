module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        // '@typescript-eslint/no-unused-vars': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        camelcase: 'off',
        'react/prop-types': 0,
        'array-callback-return': 0,
        'prettier/prettier': 'error',
        'comma-dangle': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
  ignorePatterns: ['/src/assets'],
};
