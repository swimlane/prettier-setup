'use strict';

const fileExists = require('./util/file-exists');
const output = require('./util/output');

const checkPackageJson = filename => fileExists(filename)
  .then(exists => {
    if (!exists) {
      output(`No ${filename} file found. A ${filename} file is required to be present in the working directory.`);
      process.exit(0);
    }
  });

module.exports = checkPackageJson;
