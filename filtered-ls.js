const fs = require("fs");
const path = require("path");

var directory = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(directory, (err, data) => {
  if (err) throw err;

  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i]) === "." + fileExt) {
      console.log(data[i]);
    }
  }
});
