function inputPerfNum() {
    var num = document.getElementById("isPerfNum").value;
    console.log(num);
    $("#perfNumOutput").html((perfNum(num) ? "Perfect" : "Imperfect"))
}
function perfNum(num) {
    var perfArray = [];
    var sum = 0;
    for (var i = (num / 2) ; i > 0; i--) {
        if (num % i == 0) {
            perfArray.push(i);
        }
    }

    for (var i = 0 ; i < perfArray.length ; i++) {
        sum += perfArray[i];
        console.log(perfArray[i]);
    }
    if (sum == num) {
        return true;
    } else
        return false;
}

function Run() {
    var delay = 3;   //-- 3 seconds
    $('#delayMessage').text('Please wait ' + delay + ' seconds...');
    setTimeout(whenDelayIsOver, delay);

    function whenDelayIsOver() {
        $('#delayMessage').text('Done.');
    }
}

function perfNum10k() {
    var numList = "";
    for (var i = 1; i < 10000; i++) {
        if (perfNum(i)) {
            numList += i + ', ';
        }
    }
    console.log(numList);
    $('#perfNum10k').html(numList);

}