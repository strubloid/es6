// var hero = {
//     _name: 'Rafael',
//     getSecretName : function (){
//         return this._name;
//     }
// }
//
// let stole = hero.getSecretName;
// console.log(stole())
// console.log(hero.getSecretName())
//
//
// let stoleBinding = hero.getSecretName.bind(hero);
// console.log(stoleBinding())



// Normal operations
// console.log(2 + '2'); // 22
// console.log(2 - '2'); // 0
// console.log(2 - '2 num'); // NaN

// Getting unique arrays
// let nums = [1,2,2,4];
//
// // Set does not allow duplicates
// console.log([...new Set(nums)]); // [1,2,4]
//
// const numC = nums.filter((item, index) => nums.indexOf(item) === index)
// console.log(numC)
//
// const arrayFrom = Array.from(new Set(nums));
// console.log(arrayFrom)
//
// let func = function(){
//     // {
//     //     let l = 'let';
//     //     var v = 'var';
//     // }
//
//     {
//         (function(){
//             var v = 'var';
//             let l = 'let';
//         })();
//     }
//     // console.log(l);
//     // console.log(v);
// }
// func();

// true < 7
// 1 < 7  = true
// console.log(5 < 6 < 7); // true
//
// // true > 5
// // 1 > 5  == false
// console.log(7 > 6 > 5); // false

// let a = () => arguments;
// this will return the function without the argument hi
// console.log(a('hi'));

//  to fix that  you must
// let b = (...n) => n;
// console.log(b('hi'));

// let x = function () {
//     return {
//         message : 'hi'
//     }
// }
//
// console.log(x());
// console.log(x().message);

// How to avoid to add new properties to an object
// let profile = {
//     name: 'rafael'
// }
// Object.freeze(profile);
// profile.age = 35;
// console.log(profile); // { name : 'rafael'}


// allow the user to change properties but avoid to add new ones
// let profile2 = {
//     name: 'rafael'
// }
// Object.seal(profile2);
// profile2.name = 'Rafa';
// console.log(profile2); // { name: 'Rafa' }

// modify name but not modify age
// let profile3 = {
//     name: 'rafael',
//     age : 2
// }

// this definition override anything set, setting a value to it and removing the
// option of rewrite as the argument it is false
// Object.defineProperty(profile3, 'age', {
//     value: 200,
//     writable: false
// });
// profile3.name = 'Rafa';
// profile3.age = 25;
// console.log(profile3); // { name: 'Rafa' }

// This will return infinity, as it will return the maximum numeric value, and this value goes and goes...
// console.log(Math.max()); // -Infinity
// console.log(Math.max(1,2,3)); // -Infinity


// difference between let and var
// let it is block scoped, let was introduced in ES6
// var it is functional scoped, this is the older version, var gets hoisted

// v will exist inside of the function
// v will exist inside of the if, but wont have any value undefined
// l will exist only in the if statement
// let x = function () {
//     if (true) {
//         console.log(v);
//         var v = 2;
//         let l = 1;
//         console.log(l);
//     }
//
//     console.log(v);
//     // console.log(l);
// }
// x();

// == and ===
// == compares value
// === compares value and type
// true !
// if(1 == '1'){
//    console.log(true);
// }
// false !
// if (1 === '1'){
//     console.log(true);
// } else {
//     console.log(false);
// }

// difference between let and const
// const will allow the first assignment, but no any other one
// let will allow to set any value in it
// let rafa = 1;
// rafa = 2;
// console.log(rafa);

// const rafa2 = 2;
// rafa2 = 3;
// console.log(rafa2)

// const c = [1,2];
// we can do this as it is an array property fulfilling, not an reassignment of the const c
// c.push(3);
// console.log(c)

// this wont be possible
// c = [1];
// console.log(c; // TypeError: Assignment to constant variable.


// null vs undefined
// automatically will be set a variable to undefined
// null it is a value that a program/yourself can set this value

// typeof(undefined) => undefined
// typeof(null) => object

// Arrow function usage
// const profile = {
//     firstName: '',
//     lasttName: '',
//     setName : function(name) {
//         let splitName = function (n) {
//             let nameArray = n.split('');
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         }
//         splitName(name);
//     }
// }
//
// profile.setName("Rafael Mendes");
// // console.log(profile.firstName);
// console.log(window.firstName);

// how to fix with arrow functions?
// const profile2 = {
//     firstName: '',
//     lasttName: '',
//     setName : function(name) {
//         let splitName = (n) => {
//             let nameArray = n.split(' ');
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         }
//         splitName(name);
//     }
// }

// profile2.setName("Rafael Mendes");
// console.log(profile2.firstName);


// let Car = function (model) {
//     this.model = model;
// }
//
// Car.prototype.getModel = function() {
//     return this.model;
// }
//
// let toyota = new Car('Toyota');
// console.log(toyota.getModel())
//
// let nissan = new Car('Nissan');
// console.log(nissan.getModel())


// function declaration
// functionD(); // it is avaiable
// function functionD() {
//     console.log('function declaration');
// }

// function expression
// functionE(); // behave as a variable, so wont be available before the variable
// let functionE = function() {
//     console.log('function expression');
// }

setTimeout(function (){
    console.log('a');
}, 0);

console.log('c');
console.log('b');
function log(){
    console.log('log');
}
log();