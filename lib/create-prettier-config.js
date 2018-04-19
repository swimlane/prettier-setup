'use strict';

const writeFile = require('./util/write-file');

const FILENAME = 'prettier.config.js';

const template = configPackageName =>
  `'use strict';

module.exports = require('${configPackageName}');
  `;

const createPrettierConfig = configPackageName => writeFile(FILENAME, template(configPackageName));

module.exports = createPrettierConfig;
