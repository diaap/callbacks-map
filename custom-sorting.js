/*sorting an array in numerical order

Sort numerically and ascending:

var array = [10, 2, 5, 1, 9];
array.sort(function (a,b) {
  return a-b;
}) */

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var studentSort = students.sort(function(a, b) {
  //console.log("a is", a);
  //console.log("b is", b);

  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
      if (a.age > b.age) {
        return -1;
      } else {
        return 1;
      }
  return 0;
  }
}

);
console.log(studentSort);

