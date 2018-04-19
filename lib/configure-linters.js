'use strict';

const fileExists = require('./util/file-exists');
const installDependency = require('./util/install-dependency');
const output = require('./util/output');
const addExtensionToLintConfig = require('./util/add-extension-to-lint-config');

const linters = [
  {
    filename: '.eslintrc',
    prettierConfig: 'eslint-config-prettier'
  },
  {
    filename: 'tslint.json',
    prettierConfig: 'tslint-config-prettier'
  }
];

const configureLinterIfNecessary = ({ filename, prettierConfig }) => {
  fileExists(filename).then(exists => {
    if (exists) {
      return Promise.all([installDependency(prettierConfig), addExtensionToLintConfig(filename, prettierConfig)]).catch(
        err => {
          output(`Unable to configure ${filename}: ${err}`);
        }
      );
    }
  });
};

const configureLinters = () =>
  linters.reduce((promise, linter) => promise.then(() => configureLinterIfNecessary(linter)), Promise.resolve());

module.exports = configureLinters;
