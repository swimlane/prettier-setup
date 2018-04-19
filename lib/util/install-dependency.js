'use strict';

const shell = require('shelljs');
const output = require('./output');

const installDependency = packageString =>
  new Promise((resolve, reject) => {
    const child = shell.exec(`npm i -D ${packageString}`, (code, stdout, stderr) => {
      if (code !== 0) {
        reject(new Error(stderr));
      }
      resolve();
    });
    ['data', 'error'].map(event => child.on(event, output));
  });

module.exports = installDependency;
