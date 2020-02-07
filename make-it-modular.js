const mymodule = require("./mymodule.js");
var directory = process.argv[2];
var fileExt = process.argv[3];

mymodule(directory, fileExt)

fs.readdir(directory, (err, data) => {
  if (err) throw err;

  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i]) === "." + fileExt) {
      console.log(data[i]);
    }
  }
});

