$(document).ready(function() {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");

            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content
function DisplayDropdownOptions() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}