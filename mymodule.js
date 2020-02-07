const fs = require("fs");
const path = require("path");

module.exports = function bar (callback) {
    foo(function (err, data) {
      if (err) { return callback(err) } // early return

      // ... no error, continue doing cool things with `data`
        fs.readdir(directory, (err,data) =>{
            if (err) throw err;

            for (var i = 0; i< data.length; i++) {
                if (path.extname(data[i]) === "." + fileExt) {
                    console
                }
            }
        })
      // all went well, call callback with `null` for the error argument

      callback(null, data)
    })
  }