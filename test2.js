const {promisify} = require('util');
const fs = require('fs');
const readdir = promisify(fs.readdir);

var log = "";
readdir(".").then((fileNames) => {
    log += ("fileNames = " + fileNames);
});
console.log(log);


