const mymodule = require("./mymodule.js");
const data = process.argv[2];
const filter = process.argv[3];

mymodule(data, filter, function(err, list) {
  if (err) {
    return console.error("There was an error:", err);
  }
  list.forEach(function(file) {
    console.log(file);
  });
});