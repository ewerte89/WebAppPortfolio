function findWord(evt) {
    var input = evt.target.files[0];
    var reader = new FileReader();
    var searchString = document.getElementById("searchString").value;
    console.log("the search string is : " + searchString);
    reader.onload = function () {
        var str = reader.result;
        $("#findWordResult").html("Counted:" + countAWord(searchString, str));
    };
    reader.readAsText(input);
};

function countAWord(searchString, str) {
    var array1 = str.split(/[\s,()']/);
    console.log(array1);
    var result = 0;
    for (var x in array1) {
        if (searchString === array1[x]) {
            result++;
        }
    }
    return result;
};
