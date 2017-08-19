$(document).ready(function(){
    $("#header").load("./HTML-Chunks/Header.html", headerDidLoad);

    $("#footer").load("./HTML-Chunks/Footer.html");
});

function headerDidLoad(){
    $("#hamburgerIcon").click(function() {
        console.log('click registered');

        $("#headerNavLinksContainer").css("display", "block");
    });
}