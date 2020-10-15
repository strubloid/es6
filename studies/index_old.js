// Promisses

// callbacks
// Old javascript

//callback will only run after
// console.log('start');
// function getData(data, callback)
// {
//     setTimeout(() => {
//         console.log('reading from database');
//         callback({data: data});
//     },2000);
// }
//
// getData(5,function(data){
//     console.log(data);
// });
// console.log('finish');


// ES6
// it s an operation that will be finished in the future

// everything will be async
const prom = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve({user: 'rafael'});
    },2000)
});

prom.then(data => {
    console.log(data);
})




/// Error case
conditionalFailure = 1;
const promError = new Promise((resolve, reject) =>{
    setTimeout(()=>{

        if(conditionalFailure == 1)
            reject(new Error("Something went wrong!!"));

    },2000)
});

promError.then(data => {
    console.log(data);
})
    .catch(error => console.log(error))


// Old javascript

// ES6



// Old javascript

// ES6
