const fs = require('fs');
const path = require('path');
var dirname = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirname, function(err, files) {
  files.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
