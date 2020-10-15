// Constructors

// Old javascript
// function Person(name, age, hairColor){
//
//     this.name = name;
//     this.age = age;
//     this.hairColor = hairColor;
// }
//
// Person.prototype.sayName = function () {
//     console.log('My name is ' + this.name);
// }
//
// var rafael = new Person('Rafael', 34, 'blue');
// console.log(rafael);
// rafael.sayName();


function Person(name, age, hairColor){
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

Person.prototype.sayName = function () {
    console.log('My name is ' + this.name);
}

function Rafael(occupation, hobby, name, age, hairColor){

    Person.call(this, name, age, hairColor);
    this.occupation = occupation;
    this.hobby = hobby;
}

// this was the way to get the prototype of the object, so we can access the person.sayName function
Rafael.prototype = Object.create(Person.prototype);
const person = new Rafael('dev', 'dancing', 'Rafael', 34, 'blue');
console.log(person);
person.sayName();
// ES6

class ShoppingList {

    constructor(items, number) {
        this.items = items;
        this.number = number;
    }

    sayList(){
        console.log(this.items)
    }
}


const mylist = new ShoppingList(['milk, chocolate, apple'], 3);

mylist.sayList();


class Product extends ShoppingList{
    constructor(items, number, amount, cost) {

        super(items, number);

        this.ammount = amount;
        this.cost = cost;
    }
}
const product = new Product(['redbull, chocolate, candy'], 3, 2, 10);
console.log(product);

product.sayList();

// Old javascript

// ES6



// Old javascript

// ES6



// Old javascript

// ES6
