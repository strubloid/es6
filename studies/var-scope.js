

// Old Javascript

// var names = ['rafa', 'joao', 'tom']
// var counter = 10;
// console.log(counter);
// counter = 5;
// console.log(counter);
// var counter = 20;
// console.log(counter);

// var == global variable

// var counter = 5; // you can access anywhere

function sayName()
{
    var name  ='Ed';
    console.log(name);
}

sayName();

// cant use the name inside from the function
// console.log(name)

// ES6

// we cant redeclare
const todoList = ['milk','cow'];

//todoList = ['milk']; //TypeError: Assignment to constant variable.

let counter = 10;

counter =5;

// you will use const when you shoudlnt change the value
// use let when is necesasry to change the value later on


const list = [1,2,3,4,5];
// block scoping
for(let i=0; i < list.length; i++ )
{
    // console.log(i);
}
// I only be available only inside of the { } scope, as "i" is using let
// console.log(i);

// This will print 0-4
for(var ii=0; ii < list.length; ii++ )
{
    console.log(ii);
}

// this will print 5
// with var you will be able o access the last value 5 that was the last increment from the for function
console.log(ii);


