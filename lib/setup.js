'use strict';

const fs = require('fs');
const output = require('./output');

const PACKAGE_JSON_FILENAME = 'package.json';

const setup = () => {
  fs.exists(PACKAGE_JSON_FILENAME, exists => {
    if (!exists) {
      output(`No ${PACKAGE_JSON_FILENAME} file found. A ${PACKAGE_JSON_FILENAME} file is required to be present in the working directory.`);
      process.exit(0);
    } else {
      output('yeah')
    }
  });
};

module.exports = setup;
