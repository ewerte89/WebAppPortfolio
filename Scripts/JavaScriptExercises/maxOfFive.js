function maxOfFive()
{
    var result=Math.max($('#p1').val(),
                        $('#p2').val(),
                        $('#p3').val(),
                        $('#p4').val(),
                        $('#p5').val())


    $('#maxOutput').text(result);
}