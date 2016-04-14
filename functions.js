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
//console.log('Sorted:', stringArray.sort(length));


// 2. Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

// create objects
var obj1 = {
    name: "Alberto",
    email: "alberto@a.com",
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
function strLength(obj1, obj2) {
  if (obj1.email.length < obj2.email.length) { // sort by string length
    return -1;
  }
  if (obj2.email.length < obj1.email.length) {
    return 1;
  }
  // obj1 length must be equal to obj2 length therefore 
  return 0;
}

// sort albhabetically
function strAlpha(obj1, obj2) {
  if (obj1.name < obj2.name) {
    return -1;
  }
  if (obj2.name < obj1.name) {
    return 1;
  }
  // obj1 must be equal to obj2 therefore 
  return 0;
}

//console.log('Names sorted by string length (shortest to longest): ', (objArray).sort(strLength));
//console.log('Emails sorted alphabetically: ', objArray.sort(strAlpha));


// 3. Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.

function square(numArray) {
    var squared = numArray.map(function(num) {
       return num * num; 
    });
    return squared;
}

var numbers = [1,2,3,4,5,6,7,8,9];
//console.log(square(numbers));


// 4. Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.

var obj11 = {
    num: 12
};
var obj12 = {
    num: 5
};
var obj13 = {
    num: 3
};

var numObjArray = [obj11, obj12, obj13];

function numSquare(numArray) {
    var numSquared = numArray.map(function(num) {
       return num.num * num.num; 
    });
    return numSquared;
}

console.log(numSquare(numObjArray));