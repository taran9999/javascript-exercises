const removeFromArray = function() {
    let arr = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(arr.indexOf(arguments[i]) != -1) {
            arr.splice(arr.indexOf(arguments[i]), 1);
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
