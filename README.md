# prettier-setup
A CLI tool for adding [Prettier](https://prettier.io) to projects.

## Installation
1. Install globally via [npm](https://npmjs.com):
```bash
npm install -g @swimlane/prettier-setup
```

## Usage
In a terminal, navigate to a project's directory and run `prettier-setup`.
This will prompt the user for the name of a Prettier configuration package to use (such as [`@swimlane/prettier-config-swimlane`](https://github.com/swimlane/prettier-config-swimlane)) and a [glob](https://github.com/isaacs/node-glob) pattern of files to format with Prettier.
If no Prettier configuration package name is provided, the user will be guided through building one.
> Note: `prettier-setup` assumes a `package.json` file exists in the same directory it's invoked in.

### Output
 - Creates a [Prettier configuration file](https://prettier.io/docs/en/configuration.html) named `prettier.config.js` or `.prettierrc`.
 - If a `.gitignore` file is found, creates a [`.prettierignore`](https://prettier.io/docs/en/ignore.html) file with the same contents as `.gitignore`.
 - If a `.eslintrc` file is found, adds [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) as an extended configuration.
 - If a `tslint.json` file is found, adds [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier) as an extended configuration.
 - Adds script `prettier` to `package.json`, which will format specified files when executed.

## License
[MIT](LICENSE)

## Credits
`prettier-setup` is a [Swimlane](http://swimlane.com) open-source project; we
believe in giving back to the open-source community by sharing some of the
projects we build.

[Swimlane](http://www.swimlane.com) is an automated cyber security operations and incident response
platform that enables cyber security teams to leverage threat intelligence,
speed up incident response and automate security operations.