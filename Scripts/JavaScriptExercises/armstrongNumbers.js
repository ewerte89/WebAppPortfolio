function armstrongNums() {
    var result = "";
    var hits = 0;
    var i = 99;
    for (var i = 100; i <= 999; i++) {
        if (isArmstrong(i)) {
            result += (i + "<br>");
        }
    }
    $('#armstrongOutput').html(result);
};
function isArmstrong(n1) {
    var str = n1.toString();
    var digits = str.split("");
    var sumOfDigitsRaised = 0;
    for (var j in digits) {
        sumOfDigitsRaised = Math.pow(digits[j], digits.length) + sumOfDigitsRaised;
    }
    if (sumOfDigitsRaised == n1) {
        return (true);
    } else
        return (false);
};


