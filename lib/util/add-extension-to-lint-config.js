'use strict';

const readFile = require('./read-file');
const writeFile = require('./write-file');

const addExtensionToLintConfig = (filename, extensionName) =>
  readFile(filename).then(jsonString => {
    const data = JSON.parse(jsonString);
    let extendsConfig = data.extends;
    if (typeof extendsConfig === 'undefined') {
      extendsConfig = [];
    } else if (typeof extendsConfig === 'string') {
      extendsConfig = [extendsConfig];
    }
    extendsConfig.push(extensionName);
    data.extends = extendsConfig;
    const newJsonString = JSON.stringify(data, null, 2);
    return writeFile(filename, newJsonString);
  });

module.exports = addExtensionToLintConfig;
