function fizzBuzz () {
    var result = "";
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            result +="Fizz<br>";
        } else if (i % 5 == 0) {
            result +="Buzz<br>";
        } else if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz<br>";
        } else
            result += i + "<br>";
    }
    $('#fizzOut').html(result);
};