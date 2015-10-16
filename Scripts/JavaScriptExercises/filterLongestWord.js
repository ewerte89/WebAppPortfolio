function filterWords(evt) {
    var input = evt.target.files[0];
    var reader = new FileReader();
    var inputLengthValue = document.getElementById("inputLengthValue").value;
    console.log("the search string is : " + inputLengthValue);
    reader.onload = function () {
        var str = reader.result;
        $("#filterWordResult").html("Longest Words:" + filterLongestWords(inputLengthValue, str));
    };
    reader.readAsText(input);
};

function filterLongestWords(n1, str) {
    var array1 = str.match(/\w[a-z A-Z]{0,}/gi).sort();
    var result = "Words longer than " + n1 + " characters:";
    for (var x = 1; x < array1.length; x++) {

        if (n1 < array1[x].length) {
            if (array1[x] == array1[x - 1]) { continue }
            result = result + "  " + array1[x];
        }
    }
    return result;
};