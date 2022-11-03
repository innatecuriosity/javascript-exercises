const palindromes = function (word) {
    // remove punctuation and spaces
    word = word.toLowerCase();
    let clean = "";
    for (const sign of word){
        for (const letter of "abcdefghijklmnoprqstuvxyz") {
            if (sign==letter)  {clean += sign; break;}
            continue;
        }
    }
    console.log(clean);
    for (let i=0; i<(clean.length/2); i++) {
        if (clean[i] != clean[clean.length - 1 - i]) {return false;}
    }
    return true;
};

palindromes("This is confuzing.");

// Do not edit below this line
module.exports = palindromes;
