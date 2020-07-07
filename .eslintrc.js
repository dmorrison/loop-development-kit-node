module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jasmine: true,
    mocha: true,
    node: true,
  },
  'parserOptions': {
    ecmaVersion: 8,
  },
  'extends': 'airbnb-base',
  'rules': {
    'class-methods-use-this': 'off',
    // JB: Trailing commas on functions were blowing up the chxbot build.
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'global-require': 'off',
    "linebreak-style": 0,
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-console': ['off', { allow: ['warn', 'error'] }],
    'unicode-bom': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true,
      ignore: [
        'node-win32-automation',
      ],
    }],
  },
};
