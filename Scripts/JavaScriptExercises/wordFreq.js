function wordFreq(evt) {
    var input = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var strr = reader.result;
        $("#wordFreqResult").html(findWordFreq(strr));
    };
    reader.readAsText(input);
};
function findWordFreq(str) {            //load words in document into array 
    var array1 = str.split(/[\s,()']+/);
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
    var result = "Word/Count: <ul>";         //write an output string
    for (var i in array2) {
        result = result + "<li>" + array2[i] + "</li>";
    }
    result = result + "</ul>"
    return result;
};

