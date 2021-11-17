// Main
$(document).ready(function() {


        // Play/Pause button for video background
        playOrPauseVideoBackground();
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