'use strict';

const inquirer = require('inquirer');
const checkPackageJson = require('./check-package-json');
const installDependency = require('./util/install-dependency');
const configureLinters = require('./configure-linters');
const createPrettierIgnore = require('./create-prettier-ignore');
const createPrettierConfig = require('./create-prettier-config');
const fileExists = require('./util/file-exists');
const addPrettierScript = require('./add-prettier-script');
const buildConfig = require('./build-config');

const PRETTIER_INSTALL_STRING = 'prettier@1';
const PACKAGE_JSON_FILENAME = 'package.json';

const prompt = defaultGlob =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'glob',
      message: 'Enter Glob pattern of files to format with Prettier:',
      default: defaultGlob
    },
    {
      type: 'string',
      name: 'configPackage',
      message: 'Enter Prettier configuration package to use (leave empty to build a config file):'
    }
  ]);

const setup = () => {
  fileExists('tslint.json')
    .then(exists => {
      const defaultGlob = exists ? '**/*.{js,ts}' : '**/*.js';
      return prompt(defaultGlob);
    })
    .then(answers =>
      checkPackageJson(PACKAGE_JSON_FILENAME)
        .then(() => {
          if (answers.configPackage.trim() === '') {
            return buildConfig();
          }
          return installDependency(answers.configPackage).then(() => createPrettierConfig(answers.configPackage));
        })
        .then(() => addPrettierScript(PACKAGE_JSON_FILENAME, answers.glob))
        .then(() => installDependency(PRETTIER_INSTALL_STRING))
        .then(() => configureLinters())
        .then(() => createPrettierIgnore())
    );
};

module.exports = setup;
