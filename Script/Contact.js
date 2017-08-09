$(document).ready(function() {
    var animationTime = 1200;

    $("#content").hide();

    $("#content").show("puff", {
        percent: 300
    }, animationTime);

    setTimeout(function(){
        $("body").css({
            "overflow-y": "scroll",
            "overflow-x": "hidden"
        });
    }, animationTime);
});