'use strict';

const inquirer = require('inquirer');
const schema = require('./schema');
const writeFile = require('./util/write-file');

const OUTPUT_FILENAME = '.prettierrc';

const integerFilterFn = input => Number.parseInt(input);
const integerValidateFn = input => (Number.isNaN(integerFilterFn(input)) ? 'Please enter an integer' : true);
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
    question.type = 'input';
    question.filter = integerFilterFn;
    question.validate = integerValidateFn;
  } else if (typeof option.enum !== 'undefined') {
    question.type = 'list';
    question.choices = option.enum;
  }
  return question;
});

const buildConfig = () =>
  inquirer.prompt(questions).then(answers => writeFile(OUTPUT_FILENAME, JSON.stringify(answers, null, 2)));

module.exports = buildConfig;
