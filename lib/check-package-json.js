'use strict';

const fileExists = require('./util/file-exists');
const output = require('./util/output');

const PACKAGE_JSON_FILENAME = 'package.json';

const checkPackageJson = fileExists(PACKAGE_JSON_FILENAME)
  .then(exists => {
    if (!exists) {
      output(`No ${PACKAGE_JSON_FILENAME} file found. A ${PACKAGE_JSON_FILENAME} file is required to be present in the working directory.`);
      process.exit(0);
    }
  });

module.exports = checkPackageJson;

