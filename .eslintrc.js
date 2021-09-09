// @ts-ignore
module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['airbnb-typescript', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    include: ['stories/*.ts', 'stories/*.tsx'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: true,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    semi: ['warn', 'never'],
    '@typescript-eslint/semi': ['warn', 'never'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/tests/**/*',
        ],
      },
    ],
    'class-methods-use-this': ['off'],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'no-else-return': 'off',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'object-shorthand': 'warn',
    'lines-between-class-members': 'warn',
    'prefer-template': 'warn',
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/no-array-index-key': 'off',
    'spaced-comment': 'warn',
    'no-useless-return': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/self-closing-comp': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': [
      'off',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'never',
      },
    ],
    'prettier/prettier': 'error',
    'comma-dangle': 'off',
  },
}
