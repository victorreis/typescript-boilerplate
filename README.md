# challenge-solving-platform

## Steps

### Pre configuration

1. Run `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
1. Run `nvm install 17`
1. Run `nvm use 17`
1. Create `.npmrc` and add this to it:

```plain-text:
node-version=17.x.x
engine-strict=true
package-lock=false
registry=https://registry.npmjs.org/
```

1. Create `.gitattributes` and add this to it:

```plain-text:
* text=auto eol=lf

```

### Initial configuration

1. Initialize git repository or clone
1. Run `npm init`
1. Run `npm i -g @angular/cli commitizen lerna lerna-wizard yarn`
1. Run `lerna-wizard` and create your package
1. Create `.gitignore` with at least `node_modules` inside it
1. Add these scripts to `package.json` scripts:

```json:
"bootstrap": "lerna bootstrap",
"clean:node_modules": "lerna clean && rm -Rf node_modules",
```

1. Replace the content of `lerna.json` to:

```json:
{
  "version": "0.0.0",
  "private": true,
  "npmClient": "yarn",
  "command": {
    "run": {
      "npmClient": "yarn"
    }
  },
  "useWorkspaces": true,
  "packages": ["@challenge-solving/angular", "@challenge-solving/expressjs-challenges"]
}

```

1. Add this code to `package.json`:

```json:
"workspaces": {
  "packages": [
    "packages/*"
  ],
  "nohoist": []
}
```

### Configuring .editorconfig

1. Create `.editorconfig` with these options:

```md:
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

### Configuring the workspace

1. Create `.vscode/settings.json` and add settings to it
1. Create `.vscode/extensions.json` and add extensions to it

### Configuring prettier

1. Run `yarn add -D -W prettier`
1. Copy and paste `.gitignore`, rename to `.prettierignore` and add this code to the end:

```plain-text:
# ESLINT ONLY
__snapshots__
```

1. Create `.prettierrc` and add these configs to it:

```json:
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}

```

### Configuring eslint

1. Run `yarn eslint --init`
1. Adding eslint devDependencies

```sh:
yarn add -D -W eslint \
lint-staged \
prettier \
stylelint \
stylelint-config-prettier \
stylelint-prettier \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
babel-eslint \
eslint \
eslint-config-airbnb \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-import-resolver-typescript \
eslint-plugin-import \
eslint-plugin-import-helpers \
eslint-plugin-jsx-a11y \
eslint-plugin-markdown \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-react \
eslint-plugin-react-hooks
```

1. Create `.stylelint.json` and add this to it:

```json:
{
  "extends": ["stylelint-prettier/recommended"]
}

```

1. Replace `.eslint.js` content to this:

```js:
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  globals: {
    window: 'readonly',
    document: 'readonly',
    FormData: 'readonly',
    EventSource: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      'observer',
      { property: 'styled' },
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' },
    ],
    formComponents: ['CustomForm', { name: 'Form', formAttribute: 'endpoint' }],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/all',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'import',
    'import-helpers',
    'jsx-a11y',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],

  rules: {
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/no-extraneous-class': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    curly: 2,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
          ignoreCase: true,
        },
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
      },
    ],
    'no-alert': 2,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 2,
    'no-inline-comments': 2,
    'no-param-reassign': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [
      2,
      'ForStatement',
      'ForInStatement',
      'ForOfStatement',
      'DoWhileStatement',
      'WhileStatement',
      'WithStatement',
      'TSEnumDeclaration',
    ],
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'prefer-template': 2,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    radix: 2,
    'react/destructuring-assignment': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 0,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
  },
};

```

1. Copy and paste `.gitignore`, rename to `.eslintignore` and add this code to the end:

```plain-text:
# ESLINT ONLY
__snapshots__
*.js
```

### Configuring pre-commit hook and commit-msg

1. Run `yarn add commitizen cz-conventional-changelog husky lerna`
1. Run `commitizen init cz-conventional-changelog --yarn --dev --exact`
1. Add these scripts to package.json scripts:

```json:
"prepare": "husky install",
"lint": "eslint --quiet --fix . -c ./.eslintrc.js",
"lint:report": "yarn lint -f json -o reports/eslint-report.json",
"type-check": "tsc --noEmit",
"format": "prettier --config .prettierrc --write .",
```

1. Create `.czrc` file and add `{ "path": "cz-conventional-changelog" }` to it
1. Run `yarn husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"`
1. Create `.lintstagerc.json` and add:

```json:
{
  "*.{ts,tsx}": ["yarn lint", "bash -c 'yarn type-check'"],
  "*.{js,jsx,ts,tsx,css,scss,sass,md,html,json}": "yarn format"
}

```

1. Run `yarn husky add .husky/pre-commit "yarn test"`
1. Run `yarn husky add .husky/pre-commit "yarn lint-staged"`

### Configuring tsconfig.json

1. Run `yarn tsc --init` and uncomment what you need

### Configuring angular

1. Run `ng new challenge-solving-platform --create-application false --force`
1. Run `lerna-wizard` to create the `angular` package
1. Update "name" in package.json from "angular" to "@challenge-solving/angular"
1. Run `cd packages/angular && ng new angular` with the desired parameters
1. Copy these files/folders to root: `.browserlistrc`, `.vscode/launch.json`, `.vscode/tasks.json`

### Configuring expressjs

1. Run `lerna-wizard` to create the `expressjs-challenges` package
1. Update "name" in package.json from "expressjs-challenges" to "@challenge-solving/expressjs-challenges"
1. Run `cd ../../packages/expressjs-challenges && npx express-generator --no-view --git --force`
