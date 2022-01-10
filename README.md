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

1. Run `yarn tsc --init` and uncomment what you need or put this code below:

```json:
{
  /* Visit https://aka.ms/tsconfig.json to read more about this file */
  "compileOnSave": true,
  "include": ["packages/*/src"],
  "exclude": [
    "**/node_modules",
    "**/.*",
    "**/build",
    "**/docs",
    "**/lib",
    "**/dist",
    "**/reports"
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
    "target": "es5",
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
    "paths": {
      "@code-challenges/angular": ["./packages/angular/src"],
      "@code-challenges/expressjs-challenges": [
        "./packages/expressjs-challenges/src"
      ]
    },
    // "rootDirs": [],
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@testing-library",
      "packages/angular/src/@types",
      "packages/expressjs-challenges/src/@types"
    ],
    "types": ["node", "jasmine"],
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

    /* JavaScript Support */
    // "allowJs": true,
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
stylelint-config-recommended \
stylelint-prettier \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
@babel/eslint-parser \
eslint \
eslint-config-airbnb \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-import-resolver-typescript \
eslint-plugin-import \
eslint-plugin-import-helpers \
eslint-plugin-jest \
eslint-plugin-jsx-a11y \
eslint-plugin-markdown \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-react \
eslint-plugin-react-hooks
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

1. Replace `.eslint.js` content to this:

```js:
module.exports = {
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
    jest: {
      version: 27,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'react-app',
    'react-app/jest',
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
    'jest',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: 'React' }],
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,

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
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
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
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-max-depth': [2, { max: 3 }],
    'react/jsx-no-literals': 0,
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
  overrides: [
    {
      files: ['src/**/*.test.tsx'],
      rules: {
        'testing-library/await-async-query': 0,
      },
    },
  ],
};


```

1. Copy and paste `.gitignore`, rename to `.eslintignore` and add this code to the end:

```plain-text:
# ESLINT ONLY
__snapshots__
*.js
```

### [REACT ONLY] Configuring Styled Components

1. Run `yarn add -W styled-components` and then the scripts below:

```sh:
yarn add -D -W "@types/styled-components" \
@types/styled-theming \
babel-plugin-styled-components \
jest-styled-components \
styled-normalize \
styled-theming \
stylelint-config-recommended \
stylelint-config-styled-components \
stylelint-processor-styled-components \
typescript-plugin-styled-components \

```

1. Update `.stylelintrc` to this:

```json:
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-styled-components"
  ],
  "ignoreFiles": ["**/*.d.ts"]
}

```

1. Update `babel.config.js` to this:

```js:
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'automatic' } }],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        namespace: 'photo-discovery',
        displayName: true,
        fileName: false,
      },
    ],
  ],
};

```

1. Update the `lint` script into `package.json` to this:

```json:
"lint:ts": "eslint --quiet --fix . -c ./.eslintrc.js",
"lint:css": "stylelint './src/**/*.styles.ts' --config .stylelintrc -f verbose",
"lint": "yarn lint:ts && yarn lint:css",
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

1. Add the normalize to `src/index.tsx` by updating the code to this:

```tsx:
import React from 'react';
import ReactDOM from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
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

const availableModes = ['light', 'dark', 'futuristic', 'deepSpace'] as const;
export type Mode = typeof availableModes[number];

export interface CustomThemeType {
  mode: Mode;
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
import { PhotoDiscoveryThemeType } from './Theme/Types/PhotoDiscoveryTheme.types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends PhotoDiscoveryThemeType {}
}

```

1. Create the file `src/Theme/CustomThemeProvider/CustomThemeProvider.types.ts` and add this code:

```ts:
import { CustomThemeType, Mode } from '../Types';

export type ThemeContextType = {
  theme: CustomThemeType;
  switchTheme: (themeMode: Mode) => void;
};

export type CustomThemeProviderProps = { testID?: string; themeName?: Mode };

```

1. Create the file `src/Theme/CustomThemeProvider/CustomThemeProvider.tsx` and add this code:

```tsx:
import React, { useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import {
  lightTheme,
  darkTheme,
  futuristicTheme,
  deepSpaceTheme,
} from '../Modes';
import { Mode, CustomThemeType } from '../Types';
import {
  ThemeContextType,
  CustomThemeProviderProps,
} from './CustomThemeProvider.types';

export const themes: Record<Mode | 'default', CustomThemeType> = {
  default: deepSpaceTheme,
  light: lightTheme,
  dark: darkTheme,
  futuristic: futuristicTheme,
  deepSpace: deepSpaceTheme,
};

export const ThemeContext = React.createContext<
  ThemeContextType | Record<string, never>
>({});

export const customThemeProviderDefaults: Required<CustomThemeProviderProps> = {
  testID: 'ThemeContextProvider',
  themeName: 'deepSpace',
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

  const switchTheme = (themeMode: Mode): void => {
    setTheme(themes[themeMode]);
  };

  const providerValue = useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider data-testid={testID} value={providerValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};


```

1. Create the file `src/Theme/CustomThemeProvider/index.ts` and add this code:

```ts:
export * from './CustomThemeProvider';

```

1. Create the file `src/globals.d.ts` and add this code:

```ts:
import 'styled-components';
import { CustomThemeType } from './Theme/Types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomThemeType {}
}

```

1. Create the file `src/App.styles.ts` and add this code:

```ts:
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

```

1. Replace the code of the file `src/App.tsx` with this code:

```tsx:
import React from 'react';

import { Container } from './App.styles';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

export const App: React.FC = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      <Container data-testid="container">hello world</Container>
    </CustomThemeProvider>
  );
};


```

1. Delete the files `src/logo.svg`, `src/App.css` and `index.css`.

### [REACT ONLY] Configuring Jest + Babel + TypeScript

1. Run the following command:

```sh:
yarn add --dev @babel/core \
@babel/preset-env \
@babel/preset-react \
@babel/preset-typescript \
@testing-library/jest-dom \
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
react-test-renderer \
```

1. Add the following npm script to package.json:

```json:
"test": "jest --config=jest.config.js",
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
  // coverageThreshold: undefined,

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
  // setupFiles: [],

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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { create } from 'react-test-renderer';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CustomThemeProvider } from '../../Theme/CustomThemeProvider';

const renderJestDomCreator = <ComponentProps extends Record<string, any>>(
  componentReference: React.FC<ComponentProps>,
  props: ComponentProps
) =>
  render(React.createElement(componentReference, { ...props }), {
    wrapper: CustomThemeProvider,
  });

const renderRTRCreator = <ComponentProps extends Record<string, any>>(
  componentReference: React.FC<ComponentProps>,
  props: ComponentProps
) =>
  create(
    <CustomThemeProvider>
      {React.createElement(componentReference, { ...props })}
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

1. Create the file `src/App.test.ts` and add the following code:

```ts:
import { App } from './App';
import {
  renderRTRCreator,
  renderJestDomCreator,
  screen,
} from './Config/Tests/GlobalSetup.config';
import { themes } from './Theme/CustomThemeProvider';

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
        backgroundColor: themes.default.colors.background.default,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      });
    });
  });
});


```

### [REACT ONLY] Configure Scaffolding

1. Run `yarn add -D -W scaffdog`
1. Run `yarn scaffdog init` and then enter `component`
1. Replace the content of `.scaffdog/component.md` with this:

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
  children: string;
}

export interface Default{{ inputs.value | pascal }}Props {
  variant?: TypographyVariant;
}

export interface Optional{{ inputs.value | pascal }}Props {
  style?: CSSStyleDeclaration;
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

describe(`{{ inputs.value | pascal }} component tests`, () => {
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

  describe(`behavior tests`, () => {
    it(`should render the component`, () => {
      setup().renderJestDom();
      const testInstance = screen.getByTestId({{ inputs.value | camel }}Defaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      setup().renderJestDom();
      const element = screen.getByText(text);

      expect(element).toBeInTheDocument();
    });

    it(`should render '${ {{ inputs.value | camel }}Defaults.variant}' as the default variant`, () => {
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        variant: {{ inputs.value | camel }}Defaults.variant,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default variant when it is passed as prop`, () => {
      const instance = setup({
        ...requiredProps,
        variant: newVariant,
      }).renderRTR().root;
      const element = instance.findByProps({ variant: newVariant });

      expect(element).toBeTruthy();
    });
  });

  describe(`style tests`, () => {
    it(`should have style the Container component`, () => {
      setup().renderJestDom();
      const container = screen.getByTestId({{ inputs.value | camel }}Defaults.testID);

      expect(container).toHaveStyle({
        color: hexToRgb(themes.default.colors.font.default),
        ...themes.default.typographies[{{ inputs.value | camel }}Defaults.variant],
      });
    });
  });

  describe(`snapshot tests`, () => {
    it(`should render correctly`, () => {
      const generatedJson = setup().renderRTR().toJSON();
      expect(generatedJson).toMatchSnapshot();
    });
  });
});

```

````

### Configuring pre-commit hook and commit-msg

1. Run `yarn add -D -W commitizen cz-conventional-changelog husky lerna`
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
1. Create `.lintstagedrc.json` and add:

```json:
{
  "*.{ts,tsx}": ["yarn lint", "bash -c 'yarn type-check'"],
  "*.{js,jsx,ts,tsx,css,scss,sass,md,html,json}": "yarn format"
}

```

1. Run `yarn husky add .husky/pre-commit "yarn test"`
1. Run `yarn husky add .husky/pre-commit "yarn lint-staged"`

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
