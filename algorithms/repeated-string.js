'use strict';

function countCharacters(char, string) {
    return string.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
}

// Complete the repeatedString function below.
function repeatedString(s, n) {

    // count how many a's its in the string 's'
    var aCounter = countCharacters('a', s);

    var stringSize = s.length;
    var repetition = parseInt(n / stringSize);

    // part 1
    var total = aCounter * repetition;

    var extra = s.substring(0,n % stringSize);
    total += countCharacters('a', extra);

    return total;

}

function main() {

    var s = 'cfimaakj';
    var n = 554045874191;
    // result = 138511468548

    // var s = 'jdiacikk';
    // var n = 899491;
    // result = 112436

    console.time('repeatedString');
    let result = repeatedString(s, n);
    console.timeEnd('repeatedString');
    console.table({
        "result" : result
    });
}

main();
