function inputArr() {
    var sumAndMultArr = [];
    sumAndMultArr = document.getElementById("inputNum").value.match(/-?\d+/g);
    console.log(sumAndMultArr);
    sum(sumAndMultArr);
    multiply(sumAndMultArr);
}

function sum(sumAndMultArr) {
    var total = 0;
    for (var i = 0; i < sumAndMultArr.length; i++) {
        total += Number(sumAndMultArr[i]);
    }
    $("#sum").html(total);
};

function multiply(sumAndMultArr) {
    var total = 1;
    for (var i = 0; i < sumAndMultArr.length; i++) {
        total *= sumAndMultArr[i];
    }
    $("#multiply").html(total);
};