const fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  var string = data.toString();
  console.log(string.split('\n').length - 1);
});
