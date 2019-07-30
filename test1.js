var fs = require('fs');

var log = "";
fs.readdir(".", (err, fileNames) => {
  if (err){
    log += ("an error occurred reading .");
  } else {
    log += ("fileNames = " + fileNames);
  }
});
console.log(log);


