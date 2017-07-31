var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var slides = document.getElementsByClassName("slides");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

//////////////////////
// DOCUMENT.ready() //
//////////////////////

$(document).ready(function() {
    var animationTime = 2000;

    $("#enterBtn").click(function() {
        $("#welcome").hide("explode", {pieces: 16 }, animationTime);

        setTimeout(function(){
            $("body").css({
                "overflow-y": "scroll",
                "overflow-x": "hidden"
            });
        }, animationTime);
    });

    showDivs(slideIndex);
});