module.exports = {
    extends: [
      'plugin:svelte/recommended'
    ],
    rules: {
      'svelte/no-at-html-tags': 'error', // Disallow the use of HTML tags in component templates
      'semi': ['error', 'always'], // Require semicolons at the end of statements
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline object literals and arrays
      'no-trailing-spaces': 'error', // Disallow trailing whitespace at the end of lines
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 0 }], // Limit the number of consecutive empty lines
      'no-var': 'error', // Disallow the use of var
      'prefer-const': 'error', // Prefer the use of const over let when variable reassignment is not needed
    }
  };
