const bl = require("bl");
const http = require("http");

// HTTP GET with passing the URL as first command in cmd line 
http
  .get(process.argv[2], res => {
      
    // callback after stream is ended to collect the data
    res.pipe(
      bl(function(err, data) {
        if (err) {
          return console.error("there was an error:", err);
        }

        // convert data from a Buffer data.toString()
        var string = data.toString();

        // 1st line - integer: # of chars receive from the server
        console.log(string.length);

        // 2nd line - complete string of chars sent by server
        console.log(string);
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);
