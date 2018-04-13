/*implement your own version of the map function: it will take 2 arguments
1) an array to map
2)callback function
function will return a new array based on the results of the callback function

var words = ["ground", "control", "to", "major", "tom"];
//return word.length

map(words, function(word) {
  return word.length;
});

//we want our answer to be [ 6, 7, 2, 5, 3 ]

var result = [];
var solution = words.map(function(word) {
  console.log(word);

  return word.length;
});

console.log(solution);

*/

v/*implement your own version of the map function: it will take 2 arguments
1) an array to map
2)callback function //changes each element in the array
function will return a new array based on the results of the callback function*/

//var words = ["ground", "control", "to", "major", "tom"];

function map (words, mapCallBack) {

  var result = [];
  for (var i = 0; i < words.length; i++) {
    var solution = mapCallBack(words[i]);
    result.push(solution);

  }
  return result;
}
console.log(map(["ground", "control", "to", "major", "tom"], wordLength);

function wordLength(eachWord) {
  return eachWord.length;
}


/* to uppercase-------------*/

function map(words, mapCallBack) {

  var result = [];
  for (var i = 0; i < words.length; i++) {
    var solution = mapCallBack(words[i]);
    result.push(solution);

  }
  return result;
}
console.log(map(["ground", "control", "to", "major", "tom"], wordLength);

function wordLength(eachWord) {
  return eachWord.toUpperCase();
}



// map(words, function(word) {
//   return word.split('').reverse().join('');
// });


function map(words, mapCallBack) {

  var result = [];
  for (var i = 0; i < words.length; i++) {
    var solution = mapCallBack(words[i]);
    result.push(solution);

  }
  return result;
}
console.log(map(["ground", "control", "to", "major", "tom"], wordLength);

function wordLength(eachWord) {
  return eachWord.split('').reverse().join('');
}

-------------




/*implement your own version of the map function: it will take 2 arguments
1) an array to map
2)callback function //changes each element in the array
function will return a new array based on the results of the callback function*/

var words = ["ground", "control", "to", "major", "tom", "racecar"];

function map(input, mapCallBack) {

  var result = [];
  for (var i = 0; i < input.length; i++) {
    //var solution = mapCallBack(input[i]);
    // Why do we not need it? Because we can directly put it into the array.
    result.push(mapCallBack(input[i]));

  }
  return result;
}


var spltThing = function(eachWord) {
  return eachWord.split('').reverse().join('');
}

var result = map(words, spltThing);

console.log(result);

var lengthWord = function(eachWord) {
  return eachWord.length;
}

result = map(words, lengthWord);

console.log(result);

result = map(words, function (eachWord) {
  var i = 0, j = eachWord.length - 1;

  while (i < j) {
    if (eachWord[i] === eachWord[j]) {
      // nothing
    } else {
      return false;
    }

    i++;
    j--;

  }

  return true;
});

console.log(result);