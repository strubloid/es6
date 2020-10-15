// Concatenation

// Old javascript
// var name = 'Rafa';
// var age = '43';
// console.log('Hello My name is: ' + name)

// ES6
// console.log(`Hello My "name" is: ${name}\nand my age is ${age}`);


// Object literals

// Old javascript
// function getBook(title, author){
//     return {
//         title: title,
//         author: author
//     }
// }
// var book = getBook('How to hack the world?', 'Rafael')
// console.log(book); // { title: 'How to hack the world?', author: 'Rafael' }

// ES6
// function getBook(title, author){
    // if you have the same name for index and variable,
    // you can omit it! and the result will be the same,
    // it will be getting the name specified and will create an index with it
//     return {
//         title,
//         author
//     }
// }
// console.log(book); // { title: 'How to hack the world?', author: 'Rafael' }


// Object desconstruction property from an object
// Old javascript
// var user= {
//     name: 'rafael',
//     age: 43
// }
// var myName = user.name;
// console.log(myName);

// ES6
// const list = {
//     name: 'Shopping list',
//     items: ['milk', 'sugar']
// }
// with this line you are saying that you want
// index "name" and index "items" from the object list
// const {name, items} = list;
// console.log(name, items);

// Arrow function
// Old javascript
// function sayName(){
//     console.log('Hello I am Rafael')
// }
// var sayAge = function(){
//     console.log('My age is 34');
// }
// sayName();
// sayAge();
// ES6

// const sayLocation = (location) => {
//     console.log(`My location is ${location}`);
// }
// sayLocation('paris');

// for cases that a function do only one action to return, like:
// const sayLocationInline = (location) => console.log(`My location is ${location}`);
// sayLocationInline('Brasil');

// Old javascript
// var user = {
//     name: 'Rafael',
//     age: 34,
//     sayName : function () {
//         console.log('My name is ' + this.name);
//
//         var fullName = function () {
//             // My name is undefined and my age is undefined
//             console.log('My name is ' + this.name + ' and my age is ' + this.age);
//         }
//         fullName()
//
//         // to fix the issue we usually do to be able to access the correct scope
//         var that = this;
//         var fullNameThat = function () {
//             // My name is Rafael and my age is 34
//             console.log('My name is ' + that.name + ' and my age is ' + that.age);
//         }
//         fullNameThat()
//
//
//     }
// }
// user.sayName();
// ES6

const user = {
    name : 'Rafael',
    age: 34,
    sayName : function () {
        console.log(`My name is ${this.name}`);

        // as you can notice, the arrow function get the scope of the previous object
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age} `);
        }
        fullName();
    }
}
user.sayName();


button.addEventListener('click', function(){

    // this will mean the button

    var addFade = function(){
        // this isn't reference the button, so won't work this line of code
        this.style.display == "none"
    }

    // with an arrow function this will be referenced to the button object,
    // so you will be able to change things in button scope level
    var addFade = () => {
        this.style.display == "none"
    }
})

// Old javascript

// ES6
