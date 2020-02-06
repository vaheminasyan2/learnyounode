const fs = require("fs");

//console.log (process.argv[2])
//fs.readFileSync(process.argv[1]);

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) throw err;
  var lines = data.split("\n").length - 1;
  console.log(lines);
});
