'use strict'

// declasre variables 
const http = require("http");
const bl = require("bl");
const output = [];
let count = 0;

// create function to print results that will be saved in array 
function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(output[i]);
  }
}

// create function to get response by passing urls 
function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(
      bl(function(err, data) {
        if (err) {
          return console.error(err);
        }
        output[index] = data.toString();
        count++;
        if (count === 3) {
          printResults();
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
