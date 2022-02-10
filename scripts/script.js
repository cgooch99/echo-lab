$(function() {
    console.log("document is ready!");

    $("#doge-meme-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function() {
            calculateWow();
        }
    });

    function calculateWow() {
        var x = $("#doge-meme-pic").position();
        var wow = x.top + x.left;

        if (wow < 500) {

            console.log('weak wow (' + wow + ')');
            $('#wow-output').html('<h3>weak wow (' + wow + ')</h3>')

        } else {
            console.log('BIG WOW (' + wow + ')!!!!');
            $('#wow-output').text('BIG WOW (' + wow + ')!!')
        }
    }
});