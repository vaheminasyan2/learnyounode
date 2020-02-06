const fs = require("fs");
const path = require("path");

module.exports = function(data, filter, callback) {
  fs.readdir(data, (err, list) => {
    if (err) throw err;
    list = list.filter(function(file) {
      return path.extname(file) === "." + filter;
    });
    callback(null, list);
  });
};
