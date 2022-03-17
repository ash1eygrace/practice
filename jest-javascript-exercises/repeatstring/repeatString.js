const repeatString = function(string, num) {

    var repeatedString = '';

    if ( num > -1 ) {
        for ( i = 0; i < num; i++ ) {
            repeatedString += string;
        }
    } else {
        return "ERROR";
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
