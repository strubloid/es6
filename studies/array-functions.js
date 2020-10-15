// Default parameters

// Old javascript
function multiply(x,y){
    console.log(x*y);
}
multiply(5,10);

multiply(); // this will return NaN, as we cant find something to use inside of the function

function multiplyNew(x,y){
    var a = y || 1;
    var b = y || 1;
    console.log(a*b);
}
multiplyNew();
multiplyNew(10,20);

// ES6
// To declare default parameters, you can use as PHP add the value as
// an attribution if the value it's empty will be getting that value
const add = (c =1 ,d = 1) => {
    console.log(c + d);
}

add();
add(12);

// Array functions

// ES6
const shoppingList = ['Milk', 'chocolate', 'Bananas'];

// The index is 0 and the item is Milk
// The index is 1 and the item is chocolate
// The index is 2 and the item is Bananas
shoppingList.forEach((item, index) => {
    console.log(`The index is ${index} and the item is ${item}`);
})

// Map = makes the copy of the array, so we can work with it later on
const newList = shoppingList.map(item => {
    return item + ' New! ';
})

console.log(newList);
// using this way you will attribute shoppingList[Index] to element Item
// will concatenate with " New !" and will return the whole object with the changes
const newListCompact = shoppingList.map(item => item + ' New! ');

console.log(newListCompact);

// filter
const filterList = shoppingList.filter(item => {
    return item === 'Milk'
})
console.log(filterList); // [ 'Milk' ]

// Compact version denying this milk
const filterListCompact = shoppingList.filter(item => item !== 'Milk');
console.log(filterListCompact); // [ 'chocolate', 'Bananas' ]
