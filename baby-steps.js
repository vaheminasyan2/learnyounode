//var array2 = Number(process.argv[3]);
var sum = 0;

//sum=array1 + array2
var array = process.argv;
// console.log(array)
for (var i = 2; i < array.length; i++) {
  sum = sum + Number(array[i]);
}

console.log(sum);