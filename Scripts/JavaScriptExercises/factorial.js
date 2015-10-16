function inputNum() {
    var num = document.getElementById("factorialNumber").value;
    console.log(num);
    factoCalc(num);
}
    function factoCalc(num) {
        var total = 1;
        for (var i = 2; i <= num; i++)
            total *= i;
   
    $("#factorialReturn").html(total);
}