module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrride:[],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],

  parserOptions:[
ecmaVersion:'Latest',
sourceType: 'module',
project:'./tsconfig.json'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
  },
}
