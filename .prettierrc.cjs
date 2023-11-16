/*
 * Configuration options: https://prettier.io/docs/en/options
 * Configuration files: https://prettier.io/docs/en/configuration
 * Integrating with linters: https://prettier.io/docs/en/integrating-with-linters
 */

/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'avoid',
  experimentalTernaries: false,
  jsxSingleQuote: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};

module.exports = config;
