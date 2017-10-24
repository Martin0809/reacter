const path = require('path');
const match = require('minimatch');
const rm = require('rimraf').sync;
const evaluate = require('./eval');

module.exports = (files, filters, data, src, done) => {
  if (!filters) {
    return done();
  }

  const fileNames = Object.keys(files);

  Object.keys(filters).forEach(glob => {
    fileNames.forEach(file => {
      if (match(file, glob, { dot: true })) {
        const condition = filters[glob];
        rm(path.resolve(src, glob));

        if (!evaluate(condition, data)) {
          delete files[file];
        }
      }
    })
  })
  done();
}
