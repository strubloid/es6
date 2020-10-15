'use strict';

function createFullString(s,n){
    var stringSize = s.length;
    var repetition = parseInt(n / stringSize);
    var extra = n % stringSize;
    console.log(repetition)
    console.log(extra)

    return  s.repeat(repetition) + s.substring(0,extra);
}
function countCharacters(char, string) {
    return string.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
}

// Complete the repeatedString function below.
function repeatedString(s, n) {

    if (s.length === 1){
        return n;
    }

    var stringSize = s.length;
    var repetition = parseInt(n / stringSize);

    return repetition;

    // const fullString = createFullString(s,n);
    // const uniqueStrings = [...new Set(fullString)];
    // let repeatedStringSize = 0;
    // let counter = 0;
    // uniqueStrings.forEach(element => {
    //     counter = countCharacters(element, fullString);
    //     if (counter > repeatedStringSize){
    //         repeatedStringSize = counter;
    //     }
    // });
    // return repeatedStringSize;
}

function main() {

    // var s = 'aba';
    // var n = 10;

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
