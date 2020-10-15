'use strict';


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairsCount = 0;

    // a smaller unique array to loop trough, searching for pairs
    let uniqueArrayValues = [...new Set(ar)];

    uniqueArrayValues.forEach(uniqueValue => {

        // getting all the repetitions of the uniqueValue from ar array
        var pairs = ar.filter( currentValue => currentValue == uniqueValue );

        const {length} = pairs;

        // checking if exist and if it is a at least a pair (length > 2)
        if (pairs !== undefined && length >= 2){
            console.log(pairs)
            pairs = parseInt(length / 2);
            if (pairs > 0) {
                pairsCount += pairs;
            }
        }
    });
    return pairsCount;
}

function main() {

    // var n=9;
    // var ar = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
    var n=100;
    var ar = [50,49,38,49,78,36,25,96,10,67,78,58,98,8,53,1,4,7,29,6,59,93,74,3,67,47,12,85,84,40,81,85,89,70,33,66,6,9,13,67,75,42,24,73,49,28,25,5,86,53,10,44,45,35,47,11,81,10,47,16,49,79,52,89,100,36,6,57,96,18,23,71,11,99,95,12,78,19,16,64,23,77,7,19,11,5,81,43,14,27,11,63,57,62,3,56,50,9,13,45]

    console.time('sockMerchant');
    let result = sockMerchant(n, ar);
    console.log(result);
    console.timeEnd('sockMerchant');
}

main();
