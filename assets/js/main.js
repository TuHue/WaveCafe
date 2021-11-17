// Main
$(document).ready(function() {

        // Play/Pause button for video background
        playOrPauseVideoBackground();

        // Active for Menu Drinks 
        changeActiveTag();
    })
    //Function
function playOrPauseVideoBackground() {
    const btn = $("#wrapper__control");
    const video = document.getElementById("wrapper__video");

    btn.on("click", function(e) {
        $(this).removeClass();
        if (video.paused) {
            video.play();
            $(this).addClass("fas fa-pause");
        } else {
            video.pause();
            $(this).addClass("fas fa-play");
        }
    })
}

function openTab(id) {
    $(".drink__products--show").hide();
    $("#" + id).show();
}

function changeActiveTag() {
    $(".nav__link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).parent().data('id');
        // openTab(id);
        $(".drink__products--show").hide();
        $("#" + id).show();

        $(".nav__item").removeClass("nav__item--active");
        $(this).parent().addClass("nav__item--active");
    })
}