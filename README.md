# challenge-solving-platform

## Steps

### Pre configuration

1. Run `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
1. Run `nvm install 16`
1. Run `nvm use 16`
1. Create `.npmrc` and add this to it:

```plain-text:
node-version=16.14.2
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
1. Delete the `homepage` attribute inside the `package.json`
1. Run `npm i -g lerna lerna-wizard yarn`
1. Run `lerna-wizard` and create your package
1. Create `.gitignore` with the following code:

```plain-text:
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
browser

# profiling files
chrome-profiler-events*.json
reports

# IDE - VSCode
.history/*

# compiled output
dist
lib
tmp
out-tsc

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.eslintcache
connect.lock
libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
typings
fixtures
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.tsbuildinfo
```

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
end_of_line = lf

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

### Configuring the workspace

1. Create `.vscode/settings.json` and add settings to it
1. Create `.vscode/extensions.json` and add extensions to it

### Configuring tsconfig.json

1. Run `yarn add typescript -D`
1. Run `yarn tsc --init` and uncomment what you need or put this code below:

```json:
{
  /* Visit https://aka.ms/tsconfig.json to read more about this file */
  "compileOnSave": true,
  "include": ["packages/*/src/**/*"],
  "exclude": [
    "**/node_modules",
    "**/.*",
    "**/build",
    "**/docs",
    "**/lib",
    "**/dist",
    "**/reports",
    "**/__mocks__"
  ],
  "compilerOptions": {
    /* Projects */
    "incremental": true,
    // "composite": true,
    // "tsBuildInfoFile": "./",
    // "disableSourceOfProjectReferenceRedirect": true,
    // "disableSolutionSearching": true,
    // "disableReferencedProjectLoad": true,
    "disableSizeLimit": true,

    /* Language and Environment */
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "es5", "esnext"],
    "jsx": "react-jsx",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    // "jsxFactory": "",
    // "jsxFragmentFactory": "",
    // "jsxImportSource": "react-jsx",
    // "reactNamespace": "",
    // "noLib": true,
    "useDefineForClassFields": true,

    /* Modules */
    "module": "esnext",
    // "rootDir": "./",
    "moduleResolution": "node",
    "baseUrl": "./",
    // "rootDirs": [],
    "typeRoots": ["node_modules/@types", "node_modules/@testing-library","packages/angular/src/@types",
      "packages/expressjs-challenges/src/@types"],
    "types": ["node", "jasmine", "jest", "react", "react-dom"],
    // "allowUmdGlobalAccess": true,
    "resolveJsonModule": true,
    // "noResolve": true,
    // "plugins": [
    //   {
    //     "transform": "typescript-plugin-styled-components",
    //     "type": "config",
    //     "minify": true
    //   }
    // ],

    // LERNA ONLY
    "paths": {
      "@code-challenges/angular": ["./packages/angular/src"],
      "@code-challenges/expressjs-challenges": [
        "./packages/expressjs-challenges/src"
      ]
    },

    /* JavaScript Support */
    "allowJs": true,
    // "checkJs": true,
    // "maxNodeModuleJsDepth": 1,

    /* Emit */
    // "declaration": true,
    // "declarationMap": true,
    // "emitDeclarationOnly": true,
    "sourceMap": true,
    // "outFile": "./",
    "outDir": "./dist",
    "removeComments": true,
    "noEmit": true,
    "importHelpers": true,
    // "importsNotUsedAsValues": "remove",
    "downlevelIteration": true,
    // "sourceRoot": "",
    // "mapRoot": "",
    "inlineSources": true,
    // "emitBOM": true,
    "newLine": "lf",
    // "stripInternal": true,
    "noEmitHelpers": true,
    "noEmitOnError": true,
    // "preserveConstEnums": true,
    // "declarationDir": "./",
    // "preserveValueImports": true,

    /* Interop Constraints */
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "preserveSymlinks": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    // "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    // "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    // "allowUnusedLabels": true,
    // "allowUnreachableCode": true,

    /* Completeness */
    "skipLibCheck": true
  }
}
```

### Configuring prettier

1. Run `yarn add -D prettier`
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
yarn add -D @types/eslint-config-prettier \
@types/eslint-plugin-markdown \
@types/eslint-plugin-prettier \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint \
eslint-config-airbnb \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-import-helpers \
eslint-plugin-jest \
eslint-plugin-jest-react \
eslint-plugin-jsx-a11y \
eslint-plugin-markdown \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-react \
eslint-plugin-react-hooks \
lint-staged \
stylelint \
stylelint-config-prettier \
stylelint-config-recommended \
stylelint-config-standard \
stylelint-config-styled-components \
stylelint-prettier \
stylelint-processor-styled-components
```

1. Create `.stylelintrc` and add this to it:

```json:
{
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
  ],
  "ignoreFiles": ["**/*.d.ts"]
}
```

1. Replace `.eslintrc.js` content to this:

```js:
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    jest: true,
    'jest/globals': true,
  },
  globals: {
    context: true,
    document: 'readonly',
    EventSource: 'readonly',
    expect: true,
    FormData: 'readonly',
    google: true,
    jsdom: true,
    JSX: true,
    mount: true,
    mountWithRouter: true,
    React: true,
    shallow: true,
    shallowWithRouter: true,
    window: 'readonly',
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
    jest: {
      version: require('jest/package.json').version,
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/all',
    'plugin:jest-react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:markdown/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'jest',
    'jest-react',
    'import',
    'import-helpers',
    'prettier',
    'promise',
    'markdown',
  ],
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: 'React' }],
    '@typescript-eslint/no-use-before-define': 2,
    curly: 2,
    'implicit-arrow-linebreak': 0,
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
    'jest/no-conditional-expect': 0,
    'jest/no-hooks': 0,
    'jest/require-hook': 0,
    'jsx-a11y/control-has-associated-label': 0,
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
      'ForInStatement',
      'ForOfStatement',
      'DoWhileStatement',
      'WithStatement',
      'TSEnumDeclaration',
    ],
    'no-undef': 2,
    'operator-linebreak': 0,
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
    'react/forbid-component-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-child-element-spacing': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-max-depth': [2, { max: 3 }],
    'react/jsx-newline': 0,
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-literals': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
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
    'testing-library/await-async-query': 0,
    'testing-library/no-await-sync-query': 0,
  },
};
```

1. Copy and paste `.gitignore`, rename to `.eslintignore` and add this code to the end:

```plain-text:
# ESLINT ONLY
__snapshots__
*.js
```

### [REACT ONLY] React configuration

1. Run `yarn create react-app twitter-alike-social-media --template typescript`
1. Replace the `dependencies`, `devDependencies` and the `eslintConfig` into `package.json` to this:

```json
"devDependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^17.0.20",
    "@types/react-dom": "^17.0.9",
    "typescript": "^4.4.2",
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.0"
  },
```

### [REACT ONLY] Configuring Styled Components

1. Run `yarn add styled-components postcss-syntax @stylelint/postcss-css-in-js` and then the scripts below:

```sh:
yarn add -D @babel/core \
@babel/plugin-transform-react-jsx \
@babel/preset-env \
@babel/preset-react \
@babel/preset-typescript \
@types/styled-components \
@types/styled-theming \
babel-jest \
babel-plugin-styled-components \
jest-styled-components \
styled-normalize \
styled-theming \
stylelint-config-styled-components \
stylelint-processor-styled-components \
typescript-plugin-styled-components
```

1. Update `.stylelintrc` to this:

```json:
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-styled-components"
  ],
  "customSyntax": "@stylelint/postcss-css-in-js",
  "ignoreFiles": ["**/*.d.ts", "**/*.tsx"],
  "rules": {
    "property-no-vendor-prefix": null
  }
}
```

1. Update `babel.config.js` to this:

```js:
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      { targets: { node: 'automatic' }, runtime: 'automatic' },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: true,
        runtime: 'automatic',
        importSource: 'react',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        namespace: require('./package.json').name,
        displayName: true,
        fileName: false,
        pure: true,
      },
    ],
  ],
};
```

1. Update the `lint` script into `package.json` to this:

```json:
"lint:ts": "eslint --quiet --fix . -c ./.eslintrc.js",
"lint:css": "stylelint ./src/**/*.styles.ts --config .stylelintrc",
"lint": "yarn lint:ts && yarn lint:css",
"lint:report": "yarn lint -f json -o reports/eslint-report.json",
```

1. Uncomment the code below into tsconfig.json:

```json:
"plugins": [
  {
    "transform": "typescript-plugin-styled-components",
    "type": "config",
    "minify": true
  }
],
```

1. Delete `src/App.css` and `src/index.css` and ther respective imports in `src/App.tsx` and `src/index.tsx`.

1. Update the `src/App.tsx` file to this code:

```tsx:
import { FC } from 'react';

export const App: FC = (): JSX.Element => {
  return (
    <div>
      Home page
    </div>
  );
}
```

1. Add the normalize to `src/index.tsx` by updating the code to this:

```tsx:
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './App';

ReactDOM.render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
```

### [REACT ONLY] Configuring thematization

1. Create the file `src/Theme/Types/CustomTheme.types.ts` and add this code:

```ts:
import { Borders } from './Borders.types';
import { Colors } from './Colors.types';
import { Typographies } from './Typographies.types';

export const availableThemeModes = ['dark', 'deepSpace'] as const;
export type ThemeMode = typeof availableThemeModes[number];

export interface CustomThemeType {
  mode: ThemeMode;
  colors: Colors;
  borders: Borders;
  typographies: Typographies;

  //! To be implemented
  opacities: undefined;
  shadows: undefined;
  spacings: undefined;
  acessibilities: undefined;
  animations: undefined;
}
```

1. In the same folder, create the files `Borders.types.ts`, `Colors.types.ts`, `Typographies.types.ts`, `Sizes.types.ts` with their respectively types.

1. In the folder `src/Theme/Modes`, create the files `Dark.theme.ts`, `DeepSpace.theme.ts`, `Futuristic.theme.ts`, `Light.theme.ts` with their respectively theme values.

1. Create the file `src/globals.d.ts` and add this code:

```ts:
import 'styled-components';
import { CustomThemeType } from './Theme/Types';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
```

1. Create the file `src/Theme/CustomThemeProvider/CustomThemeProvider.types.ts` and add this code:

```ts:
import { CustomThemeType, ThemeMode } from '../Types';

export type ThemeContextType = {
  theme: CustomThemeType;
  switchTheme: (themeMode: ThemeMode) => void;
};

export interface RequiredCustomThemeProviderProps {
  children?: React.ReactNode;
}

export interface DefaultCustomThemeProviderProps {
  testID?: string;
  themeName?: ThemeMode;
}

export type CustomThemeProviderProps = RequiredCustomThemeProviderProps &
  DefaultCustomThemeProviderProps;

```

1. Create the file `src/Theme/CustomThemeProvider/CustomThemeProvider.tsx` and add this code:

```tsx:
import { useMemo, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../Modes';
import { ThemeMode, CustomThemeType } from '../Types';
import {
  ThemeContextType,
  CustomThemeProviderProps,
  DefaultCustomThemeProviderProps,
} from './CustomThemeProvider.types';

export const themes: Record<ThemeMode | 'default', CustomThemeType> = {
  default: darkTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext<
  ThemeContextType | Record<string, never>
>({});

export const customThemeProviderDefaults: Required<DefaultCustomThemeProviderProps> =
  {
    testID: 'ThemeContextProvider',
    themeName: 'dark',
  };

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = (
  props
): JSX.Element => {
  const {
    testID = customThemeProviderDefaults.testID,
    children,
    themeName = customThemeProviderDefaults.themeName,
  } = props;

  const [theme, setTheme] = useState<CustomThemeType>(themes[themeName]);

  const switchTheme = (themeMode: ThemeMode): void => {
    setTheme(themes[themeMode]);
  };

  const providerValue = useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider data-testid={testID} value={providerValue}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
```

1. Create the file `src/Theme/CustomThemeProvider/index.ts` and add this code:

```ts:
export * from './CustomThemeProvider';
```

1. Create the file `src/App.styles.ts` and add this code:

```ts:
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ContainerScroll = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.default.normal};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.default.light};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.background.default.darker}cc;
  }
  &::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => theme.colors.background.default.light}cc;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background.default.darkest};
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const PageContainer = styled(ContainerScroll)`
  padding: 0 2rem;
  height: 100vh;
`;

```

1. Replace the code of the file `src/App.tsx` with this code:

```tsx:
import { FC } from 'react';

import { Container, GlobalStyle } from './App.styles';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

export const App: FC = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Container data-testid="container">
        hello world!
      </Container>
    </CustomThemeProvider>
  );
};

```

1. Delete the files `src/logo.svg`, `src/App.css`, `index.css` and `setupTests.ts`.

### [REACT ONLY] Configuring Jest + Babel + TypeScript

1. Run the following command:

```sh:
yarn add -D @testing-library/jest-dom \
@testing-library/react \
@testing-library/user-event \
@types/jest \
@types/node \
@types/node-notifier \
@types/prettier \
@types/react-test-renderer \
babel-jest \
identity-obj-proxy \
jest \
jest-config \
jest-styled-components \
jest-svg-transformer \
jest-transform-stub \
node-notifier \
react-test-renderer
```

1. Replace the `test` script in package.json to:

```json:
"test": "jest --config=jest.config.js",
"test:dev": "jest --config=jest.config.js --watchAll",
```

1. Create the `jest.config.js` file and copy and paste the code below, or run `jest --init` to create and configure it manually:

```js:
const { defaults } = require('jest-config');

module.exports = {
  ...defaults,

  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rt",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: 'babel',

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],

  // An array of file extensions your modules use
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  notify: true,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: 'babel-jest',

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: 'jest-runner',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ['dotenv/config'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.((j|t)?s(x)?)?$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
```

1. Create the file `src/Config/Tests/GlobalSetup.config.tsx` and copy and paste the following code:

```ts:
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { createElement, FC } from 'react';
import { create } from 'react-test-renderer';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CustomThemeProvider } from '../../Theme/CustomThemeProvider';

const renderJestDomCreator = <ComponentProps extends Record<string, any>>(
  componentReference: FC<ComponentProps>,
  props: ComponentProps
) =>
  render(createElement(componentReference, { ...props }), {
    wrapper: CustomThemeProvider,
  });

const renderRTRCreator = <ComponentProps extends Record<string, any>>(
  componentReference: FC<ComponentProps>,
  props: ComponentProps
) =>
  create(
    <CustomThemeProvider>
      {createElement(componentReference, { ...props })}
    </CustomThemeProvider>
  );

global.React = React;
export * from '@testing-library/react';
export { renderJestDomCreator, renderRTRCreator };
```

1. Create the file `src/Config/Tests/test.types.ts` and add the following code:

```ts:
export interface TestProps {
  testID?: string;
}
```

1. Create the file `src/App.test.tsx` and add the following code:

```ts:
import { App } from './App';
import {
  renderRTRCreator,
  renderJestDomCreator,
  screen,
} from './Config/Tests/GlobalSetup.config';
import { themes } from './Theme/CustomThemeProvider';
import { hexToRgb } from './Utils/Transform/hexToRgb.util';

describe('App component tests', () => {
  const setup = () => {
    const renderRTR = () => renderRTRCreator(App, {});
    const renderJestDom = () => renderJestDomCreator(App, {});

    return { renderRTR, renderJestDom };
  };

  describe(`behavior tests`, () => {
    it(`should render the Typography component`, () => {
      setup().renderJestDom();
      const testInstance = screen.getByTestId('container');

      expect(testInstance).toBeTruthy();
    });
  });

  describe(`style tests`, () => {
    it(`should have style the Container component`, () => {
      setup().renderJestDom();
      const container = screen.getByTestId('container');

      expect(container).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.darkest
        ),
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
      });
    });
  });
});
```

### [REACT ONLY] Configure Scaffolding

1. Run `yarn add -D scaffdog`
1. Run `yarn scaffdog init` and then enter `component`
1. Replace the content of `.scaffdog/component.template.md` with this:

````md:
---
name: 'component'
root: '.'
output: 'src/Components/'
ignore: ['.', 'src/Components/**/*']
questions:
  value: 'Please, enter the component name:'
---

# `{{ inputs.value | pascal }}/index.ts`

```ts:
export * from './{{ inputs.value | pascal }}.types';
export * from './{{ inputs.value | pascal }}';
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.types.ts`

```ts:
import { TestProps } from '../../Config/Tests/Test.types';
import { TypographyVariant } from '../../Theme/Types/Typographies.types';

export interface Required{{ inputs.value | pascal }}Props {
  /**
   * Component's children.
   */
  children: React.ReactNode;
}

export interface Default{{ inputs.value | pascal }}Props {
  /**
   * Sets the component variant. It changes the HTML tag and the styles.
   * @default 'body1'.
   */
  variant?: TypographyVariant;
}

export interface Optional{{ inputs.value | pascal }}Props {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type {{ inputs.value | pascal }}Props = Required{{ inputs.value | pascal }}Props &
  Default{{ inputs.value | pascal }}Props &
  Optional{{ inputs.value | pascal }}Props &
  TestProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;

export type {{ inputs.value | pascal }}StyleProps = Required<Default{{ inputs.value | pascal }}Props>;
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.tsx`

```tsx:
import { TestProps } from '../../Config/Tests/Test.types';
import { typographyVariantToTag } from '../../Theme/Types/Typographies.types';
import { {{ inputs.value | pascal }}Container } from './{{ inputs.value | pascal }}.styles';
import { {{ inputs.value | pascal }}Props, Default{{ inputs.value | pascal }}Props } from './{{ inputs.value | pascal }}.types';

export const {{ inputs.value | camel }}Defaults: Required<Default{{ inputs.value | pascal }}Props> &
  Required<TestProps> = {
  testID: '{{ inputs.value | pascal }}',
  variant: 'body1',
};

export const {{ inputs.value | pascal }}: React.FC<{{ inputs.value | pascal }}Props> = (props): JSX.Element => {
  const {
    testID = {{ inputs.value | camel }}Defaults.testID,
    children,
    variant = {{ inputs.value | camel }}Defaults.variant,
    ...others
  } = props;

  return (
    <{{ inputs.value | pascal }}Container
      as={typographyVariantToTag[variant]}
      data-testid={testID}
      style={style}
      variant={variant}
      {...others}
    >
      {children}
    </{{ inputs.value | pascal }}Container>
  );
};
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.styles.ts`

```ts:
import styled from 'styled-components';

import { {{ inputs.value | pascal }}StyleProps } from './{{ inputs.value | pascal }}.types';

export const {{ inputs.value | pascal }}Container = styled.span<{{ inputs.value | pascal }}StyleProps>`
  color: ${({ theme }) => theme.colors.font.default};
  ${({ variant, theme }) => theme.typographies[variant]};
`;
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.test.tsx`

```tsx:
import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { hexToRgb } from '../../Utils/Transform';
import { {{ inputs.value | pascal }}, {{ inputs.value | camel }}Defaults } from './{{ inputs.value | pascal }}';
import { Required{{ inputs.value | pascal }}Props, {{ inputs.value | pascal }}Props } from './{{ inputs.value | pascal }}.types';

describe('{{ inputs.value | pascal }} component tests', () => {
  const text = 'text';
  const newVariant = 'h1';

  const requiredProps: Required{{ inputs.value | pascal }}Props = {
    children: text,
  };

  const setup = (props?: {{ inputs.value | pascal }}Props) => {
    const renderRTR = () =>
      renderRTRCreator<{{ inputs.value | pascal }}Props>({{ inputs.value | pascal }}, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<{{ inputs.value | pascal }}Props>({{ inputs.value | pascal }}, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId({{ inputs.value | camel }}Defaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(text);

      expect(element).toBeInTheDocument();
    });

    it(`should render '${ {{ inputs.value | camel }}Defaults.variant}' as the default variant`, () => {
      expect.assertions(1);
const instance =
      setup().renderRTR().root;
      const element = instance.findByProps({
        variant: {{ inputs.value | camel }}Defaults.variant,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default variant when it is passed as prop`, () => {
      expect.assertions(1);
const instance =

      setup({
        ...requiredProps,
        variant: newVariant,
      }).renderRTR().root;
      const element = instance.findByProps({ variant: newVariant });

      expect(element).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it(`should have style the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId({{ inputs.value | camel }}Defaults.testID);

      expect(container).toHaveStyle({
        color: hexToRgb(themes.default.colors.font.default),
        ...themes.default.typographies[{{ inputs.value | camel }}Defaults.variant],
      });
    });
  });

  describe('snapshot tests', () => {
    it(`should render correctly`, () => {
      expect.assertions(1);
      const generatedJson = setup().renderRTR().toJSON();

      expect(generatedJson).toMatchSnapshot();
    });
  });
});
```
````

1. Create the file `.scaffdog/apiConsumerService.template.md` with this:

````md:
---
name: 'API consumer service'
root: '.'
output: 'src/Services/'
ignore: ['.', 'src/Services/**/*']
questions:
  value: 'Please, enter the service name:'
---

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.types.ts`

```ts:
export interface {{ inputs.value | pascal }} {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.service.ts`

```ts:
import axios from 'axios';

import { API_URL } from '../../Config/constants';
import { requestErrorHandler } from '../ErrorHandler.service';
import { {{ inputs.value | pascal }} } from './{{ inputs.value | pascal }}.types';

const getAll = async () => {
  const {{ inputs.value | camel }}s = await axios
    .get<{{ inputs.value | pascal }}[]>(`${API_URL}/{{ inputs.value | camel }}s`)
    .then((res) => res.data)
    .catch(requestErrorHandler);

  return {{ inputs.value | camel }}s;
};

const getByAlbumId = async (albumId: number) => {
  const {{ inputs.value | camel }}s = await axios
    .get<{{ inputs.value | pascal }}[]>(`${API_URL}/albums/${albumId}/{{ inputs.value | camel }}s`)
    .then((res) => res.data)
    .catch(requestErrorHandler);

  return {{ inputs.value | camel }}s;
};

export const {{ inputs.value | camel }}Service = {
  getAll,
  getByAlbumId,
};
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.service.test.ts`

```ts:
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { API_URL, APPLICATION_ERROR } from '../../Config/constants';
import { {{ inputs.value | camel }}Service } from './{{ inputs.value | pascal }}.service';
import { {{ inputs.value | pascal }} } from './{{ inputs.value | pascal }}.types';

describe('{{ inputs.value | pascal }} service tests', () => {
  global.console.error = jest.fn();

  const {{ inputs.value | camel }}sUrl = `${API_URL}/{{ inputs.value | camel }}s`;
  const get{{ inputs.value | pascal }}sByAlbumIdUrl = (id: number | string) =>
    `${API_URL}/albums/${id}/{{ inputs.value | camel }}s`;
  const unexistentAlbumId = 9999;

  const {{ inputs.value | camel }}sData: {{ inputs.value | pascal }}[] = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 2,
      id: 51,
      title: 'non sunt voluptatem placeat consequuntur rem incidunt',
      url: 'https://via.placeholder.com/600/8e973b',
      thumbnailUrl: 'https://via.placeholder.com/150/8e973b',
    },
    {
      albumId: 3,
      id: 101,
      title: 'incidunt alias vel enim',
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    },
  ];

  const filterDataByAlbumId = (id: number) =>
    {{ inputs.value | camel }}sData.filter(({{ inputs.value | camel }}) => {{ inputs.value | camel }}.albumId === id);

  const server = setupServer(
    rest.get({{ inputs.value | camel }}sUrl, (_req, res, ctx) => res(ctx.json({{ inputs.value | camel }}sData))),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(1), (_req, res, ctx) =>
      res(ctx.json(filterDataByAlbumId(1)))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(2), (_req, res, ctx) =>
      res(ctx.json(filterDataByAlbumId(2)))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(3), (_req, res, ctx) =>
      res(ctx.json(filterDataByAlbumId(3)))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(unexistentAlbumId), (_req, res, ctx) =>
      res(ctx.json([]))
    )
  );
  const serverError = setupServer(
    rest.get({{ inputs.value | camel }}sUrl, (_req, res, ctx) => res(ctx.status(500))),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(1), (_req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(2), (_req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(3), (_req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get(get{{ inputs.value | pascal }}sByAlbumIdUrl(unexistentAlbumId), (_req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  describe('Successful tests', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it(`should fetch data successfully from '${ {{ inputs.value | camel }}sUrl}'`, async () => {
      const {{ inputs.value | camel }}s = await {{ inputs.value | camel }}Service.getAll();

      expect({{ inputs.value | camel }}s).toEqual({{ inputs.value | camel }}sData);
    });

    it(`should fetch filtered data successfully from '${get{{ inputs.value | pascal }}sByAlbumIdUrl(
      '{albumId}'
    )}`, async () => {
      const {{ inputs.value | camel }}s1 = await {{ inputs.value | camel }}Service.getByAlbumId(1);

      expect({{ inputs.value | camel }}s1).toEqual(filterDataByAlbumId(1));

      const {{ inputs.value | camel }}s2 = await {{ inputs.value | camel }}Service.getByAlbumId(2);

      expect({{ inputs.value | camel }}s2).toEqual(filterDataByAlbumId(2));

      const {{ inputs.value | camel }}s3 = await {{ inputs.value | camel }}Service.getByAlbumId(3);

      expect({{ inputs.value | camel }}s3).toEqual(filterDataByAlbumId(3));
    });

    it(`should fetch no data successfully from '${get{{ inputs.value | pascal }}sByAlbumIdUrl(
      '{albumId}'
    )} when '{albumId}' doesn't exists`, async () => {
      const {{ inputs.value | camel }}s = await {{ inputs.value | camel }}Service.getByAlbumId(unexistentAlbumId);

      expect({{ inputs.value | camel }}s).toEqual(filterDataByAlbumId(unexistentAlbumId));
    });
  });

  describe('Unsuccessful tests', () => {
    beforeAll(() => serverError.listen());
    afterEach(() => serverError.resetHandlers());
    afterAll(() => serverError.close());

    it(`should throw error when server returns status 500 when trying to fetch '${ {{ inputs.value | camel }}sUrl}'`, async () => {
      try {
        await {{ inputs.value | camel }}Service.getAll();
      } catch (e) {
        expect(() => {
          throw new Error(APPLICATION_ERROR);
        }).toThrow(Error);
      }
    });

    it(`should throw error when server returns status 500 when trying to fetch '${get{{ inputs.value | pascal }}sByAlbumIdUrl(
      '{albumId}'
    )}`, async () => {
      try {
        await {{ inputs.value | camel }}Service.getByAlbumId(1);
      } catch (e) {
        expect(() => {
          throw new Error(APPLICATION_ERROR);
        }).toThrow(Error);
      }
      try {
        await {{ inputs.value | camel }}Service.getByAlbumId(2);
      } catch (e) {
        expect(() => {
          throw new Error(APPLICATION_ERROR);
        }).toThrow(Error);
      }
      try {
        await {{ inputs.value | camel }}Service.getByAlbumId(3);
      } catch (e) {
        expect(() => {
          throw new Error(APPLICATION_ERROR);
        }).toThrow(Error);
      }
    });
  });
});
```
````

1. Create the file `.scaffdog/page.template.md` with this:

````md:
---
name: 'page'
root: '.'
output: 'src/Pages/'
ignore: ['.', 'src/Pages/**/*']
questions:
  value: 'Please, enter the page name:'
---

# `{{ inputs.value | pascal }}/index.ts`

```ts:
export * from './{{ inputs.value | pascal }}';
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.tsx`

```tsx:
import { PageContainer } from '../../App.styles';
import { TestProps } from '../../Config/Tests/Test.types';

export const {{ inputs.value | camel }}Defaults: Required<TestProps> = {
  testID: '{{ inputs.value | pascal }}',
};

export const {{ inputs.value | pascal }}: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={ {{ inputs.value | camel }}Defaults.testID}>
      teste
    </PageContainer>
  );
};
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.styles.ts`

```ts:
import styled from 'styled-components';

export const {{ inputs.value | pascal }}Container = styled.div`
  color: ${({ theme }) => theme.colors.font.default};
`;
```
````

### Configuring pre-commit hook and commit-msg

1. Run `yarn add -D commitizen cz-conventional-changelog husky`
1. Run `yarn commitizen init cz-conventional-changelog --yarn --dev --exact`
1. Add these scripts to package.json scripts:

```json:
"prepare": "husky install",
"lint:ts": "eslint --quiet --fix . -c ./.eslintrc.js",
"lint:css": "stylelint ./src/**/*.styles.ts --config .stylelintrc",
"lint": "yarn lint:ts && yarn lint:css",
"lint:report": "yarn lint -f json -o reports/eslint-report.json",
"type-check": "tsc --noEmit",
"format": "prettier --config .prettierrc --write .",
```

1. Create `.czrc` file and add `{ "path": "cz-conventional-changelog" }` to it
1. Run `yarn husky add .husky/prepare-commit-msg "exec < /dev/tty && node_modules/.bin/cz --hook || true"`
1. Create `.lintstagedrc.json` and add:

```json:
{
  "*.{ts,tsx}": ["yarn lint", "bash -c 'yarn type-check'"],
  "*.{js,jsx,ts,tsx,css,scss,sass,md,html,json}": "yarn format"
}
```

1. Run `yarn husky add .husky/pre-commit "yarn test"`
1. Run `yarn husky add .husky/pre-commit "node_modules/.bin/lint-staged"`

### Configuring angular

1. Run `npm i -g @angular/cli`
1. Run `ng new challenge-solving-platform --create-application false --force`
1. Run `lerna-wizard` to create the `angular` package
1. Update "name" in package.json from "angular" to "@challenge-solving/angular"
1. Run `cd packages/angular && ng new angular` with the desired parameters
1. Copy these files/folders to root: `.browserlistrc`, `.vscode/launch.json`, `.vscode/tasks.json`

### Configuring expressjs

1. Run `lerna-wizard` to create the `expressjs-challenges` package
1. Update "name" in package.json from "expressjs-challenges" to "@challenge-solving/expressjs-challenges"
1. Run `cd ../../packages/expressjs-challenges && npx express-generator --no-view --git --force`
