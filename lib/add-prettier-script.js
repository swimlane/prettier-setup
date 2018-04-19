'use strict';

const readFile = require('./util/read-file');
const writeFile = require('./util/write-file');
const output = require('./util/output');

const addPrettierScript = (filename, globPattern) =>
  readFile(filename)
    .then(jsonString => {
      const data = JSON.parse(jsonString);
      //eslint-disable-next-line no-useless-escape
      const newScripts = Object.assign({}, data.scripts, { prettier: `prettier --write \"${globPattern}\"`});
      data.scripts = newScripts;
      return writeFile(filename, JSON.stringify(data));
    })
    .catch(err => {
      output(`Unable to add script to ${filename}: ${err}`);
    });

module.exports = addPrettierScript;