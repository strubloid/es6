function countVowels (str){
    return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
}

function findSubstring(s, k) {


    var result = { string: 'Not found!', size : 0 };
    var maxSize = Array.from(s).filter(letter => 'aeiou'.includes(letter)).length;
    console.log(maxSize);

    [...s].forEach((char,index) => {

        // firstIndex = char.typeOf('char')
        if (maxSize != result.size){
            var substring = s.substr(index, k);
            if(substring.length == k) {
                let vowelsCount = countVowels(substring);
                if(vowelsCount > 0 && vowelsCount > result.size){
                    result.string = substring;
                    result.size = vowelsCount;
                }
            }
        }

    });

    return result.string;
}

function main() {

    var s = 'caberqiitefg';

    const k = parseInt(s.trim(), 10);

    console.time('findSubstring');
    const result = findSubstring(s, k);
    console.timeEnd('findSubstring');

    console.log(result);

}

main();