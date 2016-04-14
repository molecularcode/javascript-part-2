// JavaScript part 2: functions and objects

// 1. Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.

function length(str1, str2) {
  if (str1.length < str2.length) { // sort by string length
    return -1;
  }
  if (str2.length < str1.length) {
    return 1;
  }
  // str1 length must be equal to str2 length therefore 
  return 0;
}

//console.log(sort("Alex", "Eric"));

var stringArray = ['Blue', 'Humpback', 'Beluga'];
console.log('Sorted:', stringArray.sort(length));


// 2. Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

// create objects
var obj1 = {
    name: "Albert",
    email: "albert@a.com",
};
var obj2 = {
    name: "George",
    email: "george@g.com",
};
var obj3 = {
    name: "Fred",
    email: "fred@f.com",
};

// array of objects   
var objArray = [obj1, obj2, obj3];

// sort by string length
function length(obj1, obj2) {
  if (obj1.length < obj2.length) { // sort by string length
    return -1;
  }
  if (obj2.length < obj1.length) {
    return 1;
  }
  // obj1 length must be equal to obj2 length therefore 
  return 0;
}

// sort albhabetically
function aplha(obj1, obj2) {
  if (obj1 < obj2) {
    return -1;
  }
  if (obj2 < obj1) {
    return 1;
  }
  // obj1 must be equal to obj2 therefore 
  return 0;
}

console.log('Names sorted by string length:', stringArray.sort(length));