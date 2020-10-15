'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    var jumps = 0;
    for (let i = 0; i < c.length -1; jumps++)
    {
        c[i+2] === 1 ? i++ : i+=2;
    }
    return jumps;
}

function main() {

    var steps = 12;
    var path = '0 0 1 0 0 1 0'.split(' ');

    console.time('jumpingOnClouds');
    let result = jumpingOnClouds(path);
    console.timeEnd('jumpingOnClouds');
    console.table({
        "result" : result
    });

}

main();
