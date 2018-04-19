'use strict';

const fs = require('fs');

const readFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});

module.exports = readFile;