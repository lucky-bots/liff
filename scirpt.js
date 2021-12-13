// Created by Niush Sitaula

$(document).ready(function() {
    $(".focus").lettering();
    resetAnimation();
});

function removeAnimation() {
    var myFocusText = $(".focus").text();
    for (var i = 1; i <= myFocusText.length; i++) {
        $(".char" + i).css({ "animation-iteration-count": "1" });
    }
}

function resetAnimation() {
    var myFocusText = $(".focus").text();

    for (var i = 1; i <= myFocusText.length; i++) {
        var randomNum = Math.random() * (2 - 0.5) + 0.5;
        $(".char" + i).css({
            animation: "blurout " + randomNum + "s ease-out infinite forwards alternate"
        });
    }
    isPaused = false;
    $(".pause").text("Pause Animation");
}

var isPaused = false;
function pauseAnimation(e) {
    if (!isPaused) {
        var myFocusText = $(".focus").text();
        for (var i = 1; i <= myFocusText.length; i++) {
            $(".char" + i).css({ "animation-play-state": "paused" });
        }
        $(".pause").text("Play Animation");
        isPaused = true;
    } else {
        $(".pause").text("Pause Animation");
        playAnimation();
        isPaused = false;
    }
}

function playAnimation() {
    var myFocusText = $(".focus").text();
    for (var i = 1; i <= myFocusText.length; i++) {
        $(".char" + i).css({ "animation-play-state": "running" });
    }
}
