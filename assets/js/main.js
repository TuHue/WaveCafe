// Main
$(document).ready(function() {
    //start main
    startMain();
    // Play/Pause button for video background
    playOrPauseVideoBackground();

    //Active page
    changeActivePage();
    // Active for Menu Drinks
    changeActiveTag();

});

function startMain() {
    // hide page
    $(".content__row").hide();
    $("#drink").show();

    // hide tab drink
    $(".drink__products--show").hide();
    $("#cold").show();
}

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
    });
}

function openTab(id) {
    $(".drink__products--show").hide();
    $("#" + id).show();
}

function openPage(id) {
    $(".content__row").hide();
    $("#" + id).show();
}

function changeActivePage() {
    $(".siteHeader__item").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        openPage(id);
        $(".siteHeader__item").removeClass("siteHeader--active");
        $(this).addClass("siteHeader--active");
    });
}

function changeActiveTag() {
    $(".nav__link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).parent().data("id");
        openTab(id);

        $(".nav__item").removeClass("nav__item--active");
        $(this).parent().addClass("nav__item--active");
    });
}