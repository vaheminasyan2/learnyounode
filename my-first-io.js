const fs = require('fs');

//console.log (process.argv[2])
//fs.readFileSync(process.argv[1]);
const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length-1
console.log(lines)
    
    