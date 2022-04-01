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

// CONCAT

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(...numbers);
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

//





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