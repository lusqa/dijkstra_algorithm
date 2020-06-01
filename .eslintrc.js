module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
}
