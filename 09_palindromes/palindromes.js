const palindromes = function (str) {
    let s = "";
    for(let i = 0; i < str.length; i++) {
        if((str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') || (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')) {
            s += str.charAt(i);
        }
    }
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    let pal = true;
    while(j > i) {
        if(s.charAt(i) != s.charAt(j)) {
            pal = false;
            break;
        }
        i++;
        j--;
    }
    return pal;
};

// Do not edit below this line
module.exports = palindromes;
