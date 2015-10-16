function happyNums () {
    var result = "";
    var happy = 0;
    var i = 0;
    do {
        i++
        if (isHappy(i)) {
            happy++
            result += (i + "<br>");
        }
    } while (happy < 5);
}

function happyNums () {
    var result = "";
    var happy = 0;
    var i = 0;
    do {
        i++
        if (isHappy(i)) {
            happy++
            result += (i + "<br>");
        }
    }
    while (happy < 5);
    $('#happyOutput').html(result);
};
isHappy = function (num) {
    var str = num.toString();
    var digits = str.split("");
    var sumOfDigitsSquared = 0;
    for (var j in digits) {
        sumOfDigitsSquared = Math.pow(digits[j], 2) + sumOfDigitsSquared;
    };
    if (sumOfDigitsSquared == 1) {
        return (true);
    } else if (sumOfDigitsSquared == 4) { // detect loop
        return (false);
    } else
        return (isHappy(sumOfDigitsSquared));
};