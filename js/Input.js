
const KEY_LEFT_ARROW  = 37;
const KEY_RIGHT_ARROW = 39;
const KEY_UP_ARROW    = 38;
const KEY_DOWN_ARROW  = 40;
var keyHeld_TurnLeft  = false;
var keyHeld_TurnRight = false;
var keyHeld_Gas       = false;
var keyHeld_Reverse   = false;

var mouseX = 0;
var mouseY = 0;
// end vars --------------------------------------------------------------------

function setupInput() {
        canvas.addEventListener('mousemove', updateMousePos);

        document.addEventListener('keydown', keyPressed);
        document.addEventListener('keyup', keyReleased);
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

function keyPressed(evt) {
    // console.log("Key pressed: " + evt.keyCode);

    if(evt.keyCode == KEY_LEFT_ARROW) { // turn left
        keyHeld_TurnLeft = true;
    }
    if(evt.keyCode == KEY_RIGHT_ARROW) { // turn right
        keyHeld_TurnRight = true;
    }
    if(evt.keyCode == KEY_UP_ARROW) { // speed up
        keyHeld_Gas = true;
    }
    if(evt.keyCode == KEY_DOWN_ARROW) { // slow down or reverse
        keyHeld_Reverse = true;
    }

    // prevents arrow keys from scrolling screen
    evt.preventDefault();

} // end function keyPressed ---------------------------------------------------

function keyReleased(evt) {
    // console.log("Key released: " + evt.keyCode);

    if(evt.keyCode == KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = false;
    }
    if(evt.keyCode == KEY_RIGHT_ARROW) {
        keyHeld_TurnRight = false;
    }
    if(evt.keyCode == KEY_UP_ARROW) {
        keyHeld_Gas = false;
    }
    if(evt.keyCode == KEY_DOWN_ARROW) {
        keyHeld_Reverse = false;
    }

} // end function keyReleased --------------------------------------------------
