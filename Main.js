
var canvas, canvasContext;
// end vars --------------------------------------------------------------------

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();

    trackLoadImages();
    carImageLoad();
    carReset();
} // end window.onload ---------------------------------------------------------

function updateAll() {
    moveAll();
    drawAll();
} // end function updateAll ----------------------------------------------------

function moveAll() {
    carMove();
    carTrackHandling();
} // end function moveAll ------------------------------------------------------

function drawAll() {
    drawTracks();
    carDraw();
} // end function drawAll ------------------------------------------------------
