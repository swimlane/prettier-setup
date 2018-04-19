'use strict';

const fs = require('fs');

const fileExists = filename => new Promise(resolve => fs.exists(filename, resolve));

module.exports = fileExists;