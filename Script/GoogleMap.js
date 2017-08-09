$(document).ready(function() {
    function initMap() {
        var uluru = {lat: 35.819536, lng: -78.828428};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
});