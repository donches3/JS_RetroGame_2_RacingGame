
var canvas, canvasContext;
// end vars --------------------------------------------------------------------

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
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

function clearScreen() {
    // draw background to clear screen
    colorRect(0, 0, canvas.width, canvas.height, 'black');
} // end function clearScreen --------------------------------------------------

function drawAll() {
    clearScreen();
    carDraw();
    drawTracks();
} // end function drawAll ------------------------------------------------------
