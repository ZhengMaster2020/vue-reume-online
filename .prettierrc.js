module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  useTabs: false,
  trailingComma: 'none',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
