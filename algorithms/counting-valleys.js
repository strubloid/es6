'use strict';

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {

    var currentLevel = 0;
    var prevLevel = 0;
    var valleys = 0;
    
    path.split('').forEach( element => {

        // getting previous level
        prevLevel=currentLevel;

        // doing changes in the current level
        element === 'D'
            ? currentLevel--
            : currentLevel++;

        // this will count when starts the valley
        if (prevLevel === 0 && currentLevel === -1){
            valleys++;
        }

    });

    return valleys;

}

function main() {

    // var steps = 8;
    // var path = 'UDDDUDUU';

    var steps = 12;
    var path = 'DDUUDDUDUUUD';

    console.time('countingValleys');
    const result = countingValleys(steps, path);
    console.timeEnd('countingValleys');
}

main();
