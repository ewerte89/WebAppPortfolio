function longestWord (evt) {
    var input = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var strr = reader.result;
        $("#longestWordResult").html(findLongestWord(strr));
    };
    reader.readAsText(input);
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
