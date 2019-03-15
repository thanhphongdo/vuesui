module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript'
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      indent: ['error', 4],
      'max-len': ['error', 500],
      'no-plusplus': ['off'],
      'class-methods-use-this': ['off'],
      'comma-dangle': ['error', 'never'],
      'func-names': ['error', 'as-needed']
  },
  parserOptions: {
      parser: '@typescript-eslint/parser'
  }
};
