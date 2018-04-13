var a = 1;
var a = function () {return 1}

a(); //first class object

var library = {
  printTrack: function () {}
}

//in js you can have higher-order functions -- a function that can take another function as an argument or can return another function
//closures are returning a function
//callbacks are useful to produce different results and still use the same function
//callbacks are useful for async code

function map(arr, transformFct) {
  console.log(transformFct);
}


//filter function
//[1, 2, 3, 4, 5, 6], filterFunction
//output: [2,4,6]

function filter(array, filterFct) {

var outputArray = [];
//iterate thru the initial array
//check if element is even or not
for (var element of arr) {
  // if (element % 2 === 0) {
  //   outputArr.push(element);
  // }
  if (filterFct(element)) {
    outputArr.push(element);
  }
}
return outputArr;
}

console.log(filter([1,2,3,4,5,6], function(el) {
    if (el % 2 === 0) {
    return true;
  } else{
    return false;
  }
})
)


//reduce function
// [1,2,3,4], callback fct
// [1,2,3,4] - want the sum to equal to 10


function reduce(arr, reduceFct, start) {
var sum = start; //before it was 0

// iterate thru the initial array
//need a variable to store the sum
for (var element of arr) {
  sum = reduceFct(sum, element);
}
return sum;
}



console.log(reduce(1,2,3,4), function(a,b) {
  return a+b;
},
0);