function palindromeInput() {
    var palindrome = document.getElementById("inputStr").value;
    console.log(palindrome);
    palEval(palindrome);
}

function palEval(palindrome) {
    console.log(palindrome);
    palindrome = palindrome.replace(/[^0-9A-Za-z]*/g, '').toLowerCase();
    console.log(palindrome);
    var wordLen = palindrome.length;                                           
    for (var i = 0; i < wordLen / 2; i++) {
        console.log(palindrome.charAt(i) + "   " + palindrome.charAt(wordLen - 1 - i));
        if (palindrome.charAt(i) !== palindrome.charAt(wordLen - 1 - i)) {

            $("#palReturn").html("Sorry, that's not a palindrome.");
            return;
        }                                                                           
            
    }
    $("#palReturn").html("You've got a palindrome!");

}