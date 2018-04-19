'use strict';

const inquirer = require('inquirer');
const schema = require('./schema');
const writeFile = require('./util/write-file');

const OUTPUT_FILENAME = '.prettierrc';

const options = schema.definitions.optionsDefinition.properties;

const questions = Object.keys(options).map(optionName => {
  const option = options[optionName];
  const question = {
    name: optionName,
    default: option.default,
    message: option.description
  };
  if (option.type === 'boolean') {
    question.type = 'confirm';
  } else if (option.type === 'integer') {
    question.type = 'input'
    question.validate = input => Number.isNaN(Number.parseInt(input));
    question.transformer = input => Number.parseInt(input);
  } else if (typeof option.enum !== 'undefined') {
    question.type = 'list'
    question.choices = option.enum;
  }
  return {};
});

const buildConfig = () => inquirer.prompt(questions)
  .then(answers => writeFile(OUTPUT_FILENAME, answers));

module.exports = buildConfig;