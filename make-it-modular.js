const mymodule = require("./mymodule.js");
var directory = process.argv[2];
var fileExt = process.argv[3];

mymodule(directory, fileExt, function(err, list) {
  if (err) {
    return console.error("there was an error:", err);
  }
  list.forEach(function(file) {
    console.log(file);
  });
});