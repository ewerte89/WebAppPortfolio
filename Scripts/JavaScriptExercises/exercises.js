
/*--Define a function maxOfFive() that takes five numbers as arguments and returns the largest of them.

1. Declare a 'maxOfFive ()' function
2. Declare the 'num' variable and assign to user input strings "p1" thru "p5"
3. Using the .value property, pass the user input strings as integers through the Math.max() method
4. Return and print the largest value, using the .innerHtml() method to retrieve the relevant HTML id and the produceMessage() method to display the variable result. --*/

function maxOfFive() {
    var result=Math.max($('#p1').val(),
                        $('#p2').val(),
                        $('#p3').val(),
                        $('#p4').val(),
                        $('#p5').val())
    $('#maxOutput').text(result);
}

/*--Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers
    in an array of numbers.

'sum' function:
1. Declare a sum function for array 'sumAndMultArr'.
2. Declare a sum and multiply 'total' variable and assign a number value of 0
3. Create a sequential "for loop" with the following statements: 
    a. 'Inialitize the loop at 0'
    b. 'Set the condition to run the loop for each index value in array 'sumAndMultArr' (i < sumAndMultArr.length)
    c. 'Increment the index value by one each time the loop is run'
4. Add each value in the array 'sumAndMultArr' to the total.
5. Return the sum of the index values in the array 'sumAndMultArr'.--*/

function inputArr () {
    var sumAndMultArr = [];
    sumAndMultArr.push(document.getElementById("inputNum").value);
    console.log(sumAndMultArr);
}
                                                                                
function sum (sumAndMultArr) {                                                  
    var total = 0;                                                              
    for (var i = 0; i < sumAndMultArr.length; i++) {                            
        total += sumAndMultArr[i];                                                          
    }                                                                                
    $("sum").html(total);                                                           
};                                                                              
                                                                                
function multiply (sumAndMultArr) {
    var total = 1;
    for (var i = 0; i < sumAndMultArr.length; i++) {
        total *= sumAndMultArr[i];
    }
    $("multiply").html(total);
};

/*--Write a program that calculates the factorial of a number. The factorial of a non-negative integer n is the
        product of all positive integers less than or equal to n. (i.e. 5! = 5 x 4 x 3 x 2 x 1 = 120).

'factoCalc' function:
1. Declare a function for factorial variable 'num'
2. Declare a 'total' variable and assign to the integer value 1
3. Create a sequential for loop with the following statements:
    a. 'Initialize the loop with the index value set at the value of the number entered
    b. 'Set the condition to run the loop for each index value that is greater than 0
    c. 'Decrement the value of the index value 'i' each time the loop is run' (i++)
4. Multiply each value in the generated factorial array to produce the factorial value.--*/

function inputNum () {
    var num = num.push(document.getElementById("factorial").value);
    console.log(num);

function factoCalc (num) {                                                      
var total = 1;
    for (var i = 2; i <= num; i++)
        total *= i;
    return total;
}                                                               
    $("factorial").html(total);                                                     
};                                                                               
    
/*--Define a function palindrome() that computes the reversal of a string, returning true if the string is a
        palindrome (the same forwards and backwards – “radar” for example), and false if otherwise.

1. Declare a function 'palEval' for evaluating a palindrome string.
2. Create a method expression that passes palindrome input string as all lower-case characters
3. Evaluate length of string and delcare variable wordLen to store the length value
4. Evaluate the palindrome? variable string with a sequential for loop with the following statements:
    a. 'Inialitize the loop using the first index value'
    b. 'Run the loop for half of the length of the palindrome string'
    c. 'Increment the index value by one'
5. If the chaaracter at a given index value (e.g. 1) is not equal to the character of the index value equivalent to the length of the string (8)--*/

function inputStr () {
    var palindrome = palindrome.push(document.getElementById("inputStr").value);
    console.log(palindrome);
}

function palEval (palindrome) {                                                
    var palindrome? = palindrome.toLowerCase();                                
    var wordLen = palindrome.length;                                           
    for (i = 0; i < wordLen / 2; i++) {                                        
        if (palindrome.charAt(i) !== palindrome.charAt(wordLen - 1 - i)) {          
            return ("Not a palindrome!");                                           
        }                                                                           
        else {                                                                  
           return ("It's a palindrome!")
       }
   }
}

/*--5. Write a program that iterates the integers from 1 to 100, printing the numbers to the screen. For each
    number that is a multiple of three, however, print "Fizz" instead of the number. For multiples of five it
    prints "Buzz" instead of the number. For numbers that are multiples of both three and five it prints "FizzBuzz."

1. Declare a function 'fizzBuzz'
2. Declare variable 'result' and assign it to the value of the generated list
3. Create a for loop assigning the first index value to 1 and running the loop through 100 iterations
4. Set condition that if the modulus of the number assigned to index value i and 3 is equal to 0, return the string "Fizz"
5. Set condition that if the modulus of i and 5 is equal to 0, return the string "Buzz"
6. Set the condition that if the modulus of i, 5 AND 3 is equal to 0, return the string "Fizz Buzz"
7. Print the result--*/

function fizzBuzz () {
    var result = "";
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            result +="Fizz<br>";
        } else (i % 5 == 0) {
            result +="Buzz<br>";
        } else (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz<br>";
        } else
            result += i + "<br>";
    }
$('FizzBuzz').html(result);
};

/*--Perfect Numbers: In number theory, a perfect number is a positive integer that is equal to the sum of its
proper positive divisors, that is, the sum of its positive divisors excluding the number itself. The first
perfect number is 6 – its positive divisors (excluding itself) are 1, 2, and 3, whose sum is 6.

Write a function that determines whether a given number is ‘perfect.’

1. Declare a 'perfNum' function, passing variable 'num' as an argument
2. Declare variable 'perfArray'
3. Create for loop setting the index value to the 'num' variable divided by 2, run the for loop as long as the value is greater than 0, decrementing by one
4. Push index values for which the modulus of the 'num' variable value divided by the index value is equal to 0
5. If the sum of the perfArray variable is equal to the number value, return as a 'Perfect' number 
6. Else, return as false
7. Print result.--*/

function inputNum () {
    var num = num.push(document.getElementById("isPerfNum").value);
    console.log(num);

function perfNum (num) {
    var perfArray = [];
    for (i = (num / 2); i > 0; i--) {
        if (num % i == 0) ;
            perfArray.push(i);
        }
        if (sum(perfArray) == num) {
            return true;
        } else
            return false;
    $("isPerfNum").html(num); 
};

/*--b. Write a function to display all perfect numbers between 1 and 10,000.
1. --*/

function perfNum10k () {
    var numList = "";
    for (i = 1; i < 10,000; i++) {
        if (perfNum(i)) {
            numList += (i + $("perfNum10k"));
        }
    }
    $('perfNum10k').html(numList);
}

/*--Write a program to display the first 5 Happy Numbers. Happy numbers are those that can be reduced to
1 through the following process – Start with any positive integer, replace the number with the sum of the
squares of its digits, and repeat until the result is 1 or the result is an endless loop.--*/

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
        $('result').html(result);
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

/*--3. Write a program to find all three-digit Armstrong numbers. An Armstrong number is an integer such that
the sum of the cubes of its digits is equal to the number itself. (i.e. 371 is an Armstrong number since 33 +
73 + 13 = 371.--*/

    function armstrongNums () {
        var result = "";
        var hits = 0;
        var i = 99;
        for (var i = 100; i <= 999; i++) {
            if (isArmstrong(i)) {
                result += (i + "<br>");
            }
        }
        $('results').html(result);
    };
    function isArmstrong (n1) {
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

/*--4. Write a function findLongestWord() that finds and displays the longest word in a selected text file.--*/

    function longestWord () {
        var input = $('#textfile4')[0];
        var reader = new FileReader();
        reader.onload = function () {
            $("#longestWordResult").html("The longest word is:" + findLongestWord(reader.result));
        }
        reader.readAsText(input.files[0]);
    };
    function findLongestWord(str) {
        var array1 = str.match(/\w[a-z]{0,}/gi);
        var result = array1[0];
        for (var x = 1; x < array1.length; x++) {
            if (result.length < array1[x].length) {
                result = array1[x];
            }
        }
        return result;
    };

/*--5. Write a function filterLongWords() that finds and displays all words that are longer than a given integer i
in a selected text file. Do not display words more than once.--*/

    function task25 (n1) {
        var input = $('#textfile5')[0];
        var reader = new FileReader();
        reader.onload = function () {
            $("#filterLongestWordsResult").html(filterLongestWords(n1, reader.result));
        };
        reader.readAsText(input.files[0]);
    };

    function filterLongestWords(n1, str) {
        var array1 = str.toLowerCase().match(/\w[a-z]{0,}/gi).sort();
        var result = "Words longer than " + n1 + " characters:";
        for (var x = 1; x < array1.length; x++) {

            if (n1 < array1[x].length) {
                if (array1[x] == array1[x - 1]) { continue }
                result = result + "  " + array1[x];
            }
        }
        return result;
    };
        
/*--6. Write a function wordFreq() that displays a frequency listing of the words contained in a selected text
file. Order the words by frequency.--*/

    function wordFreq () {
        var input = $('#textfile6')[0];
        var reader = new FileReader();
        reader.onload = function () {
            $("#wordFreqResult").html(findWordFreq(reader.result));
        };
        reader.readAsText(input.files[0]);
    };
    function findWordFreq(str) {            //load words in document into array 
        var array1 = str.toLowerCase().match(/\w[a-z]{0,}/gi);
        var obj1 = {};
        for (var i in array1) {             //iterate through array counting words
            if (obj1[array1[i]] == null) {  // have we seen this word ?
                (obj1[array1[i]]) = 1       // if no, count the first sighting
            } else {
                (obj1[array1[i]])++         // if yes, increment the count
            }
        };
        var array2 = [];
        for (var i in obj1) {               //put results back into an array
            array2.push([i, obj1[i]]);
        };
        array2.sort(function (a, b) {        //sort by count (rank)
            return b[1] - a[1]
        });
        var result = "Word/Count:";         //write an output string
        for (var i in array2) {
            result = result + "  " + array2[i];
        };
        return result;
    };

/*--7. Write a function findWord() that returns the total number of occurrences of a given word in a selected
    text file (i.e. the number of occurrences of “Alice” in the first chapter of Alice in Wonderland).--*/
    function findWord (searchStr1) {
        var input = $('#textfile7')[0];
        var reader = new FileReader();
        reader.onload = function () {
            $("#findWordResult").html("Counted:" + countAWord(searchStr1, reader.result));
        };
        reader.readAsText(input.files[0]);
    };

    function countAWord(searchStr1, str) {
        var array1 = str.toLowerCase().match(/\w[a-z]{0,}/gi);
        var searchStr1 = searchStr1.toString().toLowerCase();
        var result = 0;
        for (var x in array1) {
            if (searchStr1 == array1[x]) {
                result++;
            }
        }
        return result;
    };
