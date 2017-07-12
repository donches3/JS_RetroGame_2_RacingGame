
var canvas, canvasContext;
// end vars --------------------------------------------------------------------

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    loadImages();
} // end window.onload ---------------------------------------------------------

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    carReset();
} // end function imageLoadingDoneSoStartGame ----------------------------------

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
