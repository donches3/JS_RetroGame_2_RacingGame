
var canvas, canvasContext;

var blueCar  = new carClass();
var greenCar = new carClass();
// end vars --------------------------------------------------------------------

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // rudimentary loading screen
    colorRect(0,0, canvas.width, canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

    // game won't start until images finish loading
    loadImages();
} // end window.onload ---------------------------------------------------------

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    blueCar.reset(car1Pic);
    greenCar.reset(car2Pic);
} // end function imageLoadingDoneSoStartGame ----------------------------------

function updateAll() {
    moveAll();
    drawAll();
} // end function updateAll ----------------------------------------------------

function moveAll() {
    blueCar.move();
    greenCar.move();
} // end function moveAll ------------------------------------------------------

function drawAll() {
    drawTracks();
    blueCar.draw();
    greenCar.draw();
} // end function drawAll ------------------------------------------------------
