//JS ARROW FUNCTIONS


//-------1------------
// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
// const print = () => console.log(materials);
// print();


/////--------------2--------------
// b = 10;
// const a = () => console.log(b + 100);
// a();


////-------------3--------------
// let a = 10;
// let b = 20;

// const c = (a, b) => {
//     let chuck = 42;
//     return a + b + chuck;
// }

// console.log(c(a, b));

////////---------4-----------------
// let bob = a => a + 100;
// console.log(bob(312));


////////------5---------------
// var obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//         console.log(this.i, this);
//     }
// }
// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}
// //-> this keyword will not work with arrow function will work with ordinary functions only


////////-----------6------------
// //ordinary function
// var obj = {
//     num: 100
// }

// // Setting "num" on window to show how it is NOT used.
// // window.num = 2020; // throws error as window is not defined

// // A simple traditional function to operate on "this"
// var add = function(a, b, c) {
//     return this.num + a + b + c;
// }

// // call
// var result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
// console.log(result) // result 106

// // apply
// const arr = [1, 2, 3]
// var result = add.apply(obj, arr) // establishing the scope as "obj"
// console.log(result) // result 106

// // bind
// var result = add.bind(obj) // establishing the scope as "obj"
// console.log(result(1, 2, 3)) // result 106


//-------------7------------
// const person = {
//     firstName: "Joh8n",
//     lastName: "Doe",
//     fullName: () => {
//         return this.firstName + " " + this.lastName;
//     }
// }

// // This will return "John Doe":
// console.log(person.fullName());

//=-----------8--------------
// const person = {
//     firstName: "theo",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "joe"
// }

// // This will return "John Doe":
// console.log(person.fullName.call(person2)); // will call the function
// console.log(person.firstName); // will return the value of the object if we use call we get error message

//----------------9-------------------
// const person = {
//     fullName: function(city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// console.log(person.fullName.call(person1, "Oslo", "Norway"));


///------------10-----------------
//call and apply functions
// const person = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// // This will return "Mary Doe":
// console.log(person.fullName.apply(person1));
// console.log(person.fullName.call(person1));

//---------------11-------------
// const person = {
//     fullName: function(city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// console.log(person.fullName.call(person1, ["Oslo", "Norway"])); //$@why undefined
// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

/////////-----------12-----------------
// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
// ];

// for (let i = 0; i < animals.length; i++) {
//     (function(i) {
//         this.print = function() {
//             console.log('#' + i + ' ' + this.species +
//                 ': ' + this.name);
//         }
//         this.print();
//     }).call(animals[i], i);
// }


// //////////----------13------------
// var arguments = [100, 2, 30];
// var arr = () => arguments[0];
// console.log(arr()); // 1

// function foo(n) {
//     var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
//     return f();
// }
// console.log(foo(3)); // 3 + 3 = 6


////////////////////----------14------------
// function foo(n) {
//     var f = (...args) => args[1] + n;
//     return f(10, 12);
// }

// console.log(foo(1)); // 11

//////--------------15----------
// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor


// var Foo = function() {};
// var foo = new Foo(); // with function it works with arrow function throws an error

//////////////---16---------
// let callback;

// callback = callback || function() { console.log("hello"); }; // ok
// // callback();

// // callback = callback || () => {}; //error
// // SyntaxError: invalid arrow-function arguments

// // $@ if we use both only first is executed second isnot executing 

// callback1 = callback || (() => { console.log("world"); }); // ok
// callback1();

/////////////////////////////////
// //TERNERY OPERATOR
/////////////////////////////////
// for (a = 1; a < 5; a++) {
//     console.log((a % 2 == 0) ? "even number " + a : "odd number " + a);
// }



///////////////////////////////////////
///REST AND SPREAD 
///////////////////////////////////////

//////---------1---------------------
// function sum(x, y, z, ...a) {
//     return x + y + z + " " + a;
// }

// const numbers = [1, 2, 3, 5, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4];

// console.log(sum(...numbers));
// // expected output: 6

// console.log(sum.apply(null, numbers));
// // expected output: 6

///////////////----------------2----------
// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore);

/////////----------3---------------
// function myFunction(x, y, z) { console.log(x + y + z); }
// let args = [80, 1, 20];
// myFunction.apply(null, args);

//  above and below does the same function only

// function myFunction(x, y, z) { console.log(x + y * z); }
// let args = [0, 11, 200];
// myFunction(...args);

/////------------4----
// function myFunction(v, w, x, y, z) { console.log(v + w + x + y + z) }
// let args = [0, 1];
// myFunction(1, ...args, ...[30, 60, 8]);
/// we can have multiple spread operator in the arguments

//////---------5-----------
// let dateFields = [1970, 1, 1]; // 1 Jan 1970
// let d = new Date(...dateFields);

// console.log(d);


////---------6-----------
// let a = [
//     [1, 2, 3, 4],
//     [2, 8, 9],
//     [3]
// ];
// let b = [...a];

// // let b = a;
// b.shift();
// // $@ no differencein above and below statements
// b.shift().shift();

// console.log(...b);


////-----------7--------------

// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9, 10];

// let c = [...a, ...b];
// console.log(...c);

//simple concatenation

//////------------8-------
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// //  Prepend all items from arr2 onto arr1
// Array.prototype.unshift.apply(arr1, arr2)
// console.log(...arr1);
// console.log("new line");
// arr1.unshift(20);
// console.log(...arr1);


//////--------9-------------
// let obj1 = { foo: 'badr', x: 42 };
// let obj2 = { foo: 'baz', x: 13 };

// let clonedObj = {...obj1 };
// // Object { foo: "bar", x: 42 }
// console.log(clonedObj);

// let mergedObj = {...obj1, ...obj2 };
// // Object { foo: "baz", x: 42, y: 13 }

// console.log(mergedObj);

///////------------10-----------------
// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     }, 100);
// }

// console.log(sum(1, 2, 3, 32, 3, 23, 23, 23, 23, 23));

// console.log(sum(1, 2, 3, 4));


//////------------11-------------------
// function fun1(...theArgs) {
//     console.log(theArgs.length)
// }

// fun1()
// fun1(...("theodore"));
// fun1(5, 6, 7)


///////----------12----------------
// function multiply(multiplier, ...theArgs) {
//     return theArgs.map(element => {
//         return multiplier * element
//     })
// }

// let arr = multiply(2, 15, 25, 42)
// console.log(...arr) // [30, 50, 84]

/////////////////////////////////////
////------CONST AND LET-------------
/////////////////////////////////////


//////--------------1--------------
// let a;
// console.log(a);

/////--------2-------------------
// The same applies to arrays
// const MY_ARRAY = [];
// // It's possible to push items into the array
// MY_ARRAY.push('A'); // ["A"]
// MY_ARRAY.push(2); // ["A"]

// console.log(MY_ARRAY);

/////-----------3----------------
// var a;
// var a = 2;
// console.log(a);

///------------4--------------
// let x = 1;

// switch (x) {
//     case 0:
//         {
//             let foo;
//         }
//     case 1:
//         {
//             let foo;
//             break;
//         }
// }

// // NO error coz we have used let within the block level (inside {} ) if we remove {} will throw error



//-----------5------------
// var a = 1;
// var b = 2;

// if (a === 1) {
//     var a = 11; // the scope is global
//     let b = 22; // the scope is inside the block

//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);


////////////////////////////////////
/////-------ARRAY FUNCTIONS---------
////////////////////////////////////

/////////////----------------1----------------
// a = Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array('a', 'b', 'c', 'd'));
// Array.isArray(new Array(3));
// // Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);

// console.log(a);

// // all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray('Array');
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray(new Uint8Array(32));
// b=Array.isArray({ __proto__: Array.prototype });
// console.log(b);

//////////------------2-----------------
// CONCAT

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(...numbers);
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

//////-------3-----------

// // 
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// console.log(array1.copyWithin(1, 3, 5));

// // copy to index 1 all elements from index 3 to the end
// // console.log(array1.copyWithin(1, 3));

/////----------4-------------
// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// //lists entries one by one 


////-----------5--------------
// const isBelowThreshold = (currentValue) => currentValue < 30;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));

//checks for condition is true for all the elements in the array and returns value

///-----------6--------------


// const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

//isSubSet checks for subset in same order

////-----------------7------------------
// const array1 = [1, 2, 3, 4];

// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]

// // fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]

// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]
//helpfull in resetting array or replacing with some elements

//--------------8--------------
// filter
// A new array with the elements that pass the test. If no elements 
// pass the test, an empty array will be returned.

// function isBigEnough(value) {
//     return value < 100
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

// console.log(filtered);

//----------9-------------

//returns first element after searching

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 07);

// console.log(found);


//------------10--------

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element == 44;

// console.log(array1.findIndex(isLargeNumber));

////////-------------11----------
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

///////---------12----------
// const arr1 = [0, 1, 2, [
//     [3, 4]
// ]];

// console.log(arr1.flat(2));

////---------13----------------
// const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat());
// // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat(2));
// // [1, 2, 3, 4, [5, 6]]


///------------14---------------
// let arr1 = [1, 2, 3, 4];

// console.log(arr1.map(x => [x * 2]));

// console.log(arr1.flatMap(x => [x * 2]));

// only one level is flattened
// console.log(arr1.flatMap(x => [
//     [x * 2]
// ]));

//-----------15-----------
// const array1 = ['a', 'b', 'c11'];

// array1.forEach(element => console.log(element));

//------------16--------
// const words = ['one', 'two', 'three', 'four'];
// words.forEach((word) => {
//     console.log(word);
//     if (word === 'three') {
//         words.shift(); //'one' will delete from array
//     }
// }); // one // two // four

// console.log(words); // ['two', 'three', 'four']
// modifying array element

// //------------17---------
// const flatten = (arr) => {
//     const result = [];
//     arr.forEach(i => {
//         if (Array.isArray(i)) {
//             result.push(...flatten(i));
//         } else {
//             result.push(i);
//         }
//     });
//     return result;
// }

// // Usage
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(...flatten(nested));

//-----18-----------
// console.log(Array.from([123], x => x + x));


//-------------19--------------
// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// let removed = myFish.splice(1, 2, 'drum');
// console.log(removed);
// console.log(myFish);

// splice similar to delete and replace or cut and replace

//---------------20-------------

//slice - can take and show a copy without affecting the parent array
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 3));

////////----------21-----------


// const num1 = [
//     [1]
// ];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);
// console.log(numbers);

// const numbers1 = [...num1, ...num2];
// console.log(numbers1);


////---------22------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// console.log(fruits.sort());
// fruits.reverse();
// console.log(fruits);


//------------23-----------


// let a = "theodore";
// let b = parseInt(a);
// console.log(toString(b));
// let a = parseInt("1");
// console.log(a);

//-----------24------------

// ////String to Number conversion
// str = 'abc';
// b = +str;
// console.log(typeof(str));
// console.log(typeof(b));

//--------25------------
// // NaN comparison
// NaN === NaN; // false
// Number.NaN === NaN; // false
// isNaN(NaN); // true
// isNaN(Number.NaN); // true
// Number.isNaN(NaN); // true


//---------26-------------
// function valueIsNaN(v) { return v !== v; }
// valueIsNaN(1); // false
// valueIsNaN(NaN); // true
// valueIsNaN(Number.NaN); // true

//--------------27--------------

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());

//-------------28------

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // expected output: 5

// console.log(array1);



//---------29-----------

// const array1 = ['a', 'b', 'c', 'efede'];
// const iterator = array1.values();

// for (const value of iterator) {
//     console.log(value);
// }

//-----------30--------------
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const iterator = arr.values();

// for (let letter of arr) {
//     console.log(letter);
// } //"a" "b" "c" "d" "e"

//------------31----------

// console.log((function() {}).constructor === Function);


//-------------32-------------

// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

// console.log(clothing.length);

//--------------33-----------

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(2));

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(({ name }) => name === 'cherries');

console.log(result)










///////////////////////////////
/////-----CLASSES--------------
///////////////////////////////

//////-------1-------------
// let Rectanghgle = class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
// console.log(Rectanghgle.name);
// // output: "Rectangle2"

//////////---------2-------------
// function sum(a, a, c) { // !!! syntax error
//     // 'use strict';
//     return a + a + c; // wrong if this code ran
// }

// if we use strict it shows error 

///////////------3--------------













// // unnamed
// let Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"

// // named
// let Rectangle = class Rectangle2 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
// console.log(Rectangle.name);
// // output: "Rectangle2"