'use strict';

const fs = require('fs');

const writeFile = (filename, contents) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filename, contents, 'utf8', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });

module.exports = writeFile;
