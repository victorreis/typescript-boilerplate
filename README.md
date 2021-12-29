# challenge-solving-platform

## Steps

1. Initialize git repository or clone
1. `npm init`
1. `npm i -g @angular/cli commitizen lerna lerna-wizard yarn`
1. Create `.gitignore` with `node_modules` inside it
1. `yarn add commitizen`
1. `commitizen init cz-conventional-changelog --yarn --dev --exact`
1. Create `.czrc` file and add `{ "path": "cz-conventional-changelog" }` to it
1. `npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"`
1. Create `.vscode/settings.json` and add settings to it
1. Create `.vscode/extensions.json` and add extensions to it
1. `ng new challenge-solving-platform --create-application false --force`
1. `lerna create angular`
1. `cd packages/angular && ng new angular` with the desired parameters
1. Copy these files/folders to root: `.editorconfig`, `.gitignore`, `.browserlistrc`, `.vscode/launch.json`, `.vscode/tasks.json`
1. `lerna create expressjs-challenges`
1. `cd ../../packages/expressjs-challenges && npx express-generator --no-view --git --force`
