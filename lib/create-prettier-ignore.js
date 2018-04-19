'use strict';

const fileExists = require('./util/file-exists');
const readFile = require('./util/read-file');
const writeFile = require('./util/write-file');

const CLONE_OF_FILENAME = '.gitignore';
const OUTPUT_FILENAME = '.prettierignore';

const createPrettierIgnore = () =>
  fileExists(CLONE_OF_FILENAME).then(exists => {
    if (exists) {
      return readFile(CLONE_OF_FILENAME).then(content => writeFile(OUTPUT_FILENAME, content));
    }
    return Promise.resolve();
  });

module.exports = createPrettierIgnore;
