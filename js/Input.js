
// Arrow key codes
const KEY_UP_ARROW    = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW  = 40;
const KEY_LEFT_ARROW  = 37;

// WASD key codes
const KEY_W = 87; // up
const KEY_D = 68; // right
const KEY_S = 83; // down
const KEY_A = 65; // left

var mouseX = 0;
var mouseY = 0;
// end vars --------------------------------------------------------------------

function setupInput() {
        canvas.addEventListener('mousemove', updateMousePos);

        document.addEventListener('keydown', keyPressed);
        document.addEventListener('keyup', keyReleased);

        blueCar.setupInput( KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
        greenCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);

} // end function updatesetupInputMousePos -------------------------------------

function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top  - root.scrollTop;

    //                                   temporary cheat ||||||||||||||
    // carX = mouseX;
    // carY = mouseY;
    // carSpeedX = 4;
    // carSpeedY = -4;

} // end function updateMousePos -----------------------------------------------

function keySet(keyEvent, whichCar, setTo) {
    if(keyEvent.keyCode == whichCar.controlKeyLeft) { // turn left
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyRight) { // turn right
        whichCar.keyHeld_TurnRight = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyUp) { // speed up
        whichCar.keyHeld_Gas = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyDown) { // slow down or reverse
        whichCar.keyHeld_Reverse = setTo;
    }

} // end function keySet -------------------------------------------------------

function keyPressed(evt) {
    // console.log("Key pressed: " + evt.keyCode);

    keySet(evt, blueCar, true);
    keySet(evt, greenCar, true);

    // prevents arrow keys from scrolling screen
    evt.preventDefault();

} // end function keyPressed ---------------------------------------------------

function keyReleased(evt) {
    // console.log("Key released: " + evt.keyCode);

    keySet(evt, blueCar, false);
    keySet(evt, greenCar, false);
} // end function keyReleased --------------------------------------------------
