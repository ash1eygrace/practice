const reverseString = function(string) {
    // Chained: return string.split("").reverse().join("");
    
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
};

// Do not edit below this line
module.exports = reverseString;
