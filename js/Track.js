
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var levelOne  = [4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                 1,0,0,0,1,1,1,4,4,4,4,1,1,1,1,1,1,0,0,1,
                 1,0,0,1,1,0,0,1,4,4,4,1,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,
                 1,0,0,1,0,0,5,0,0,0,5,0,0,1,0,0,1,0,0,1,
                 1,2,2,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
                 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,1,0,0,0,0,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
                 1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4];

var trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;
// end vars --------------------------------------------------------------------

function returnTileTypeAtColRow(col, row) {
    // if inside track field ...
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
            var trackIndexUnderCoord = rowColToArrayIndex(col, row);
            return trackGrid[trackIndexUnderCoord];
        } else { // outside track field, so no track
            return TRACK_WALL;
        } // end if else
} // end function isObstacleAtColRow -----------------------------------------------

function carTrackHandling(whichCar) {
    var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    // if car is within track field ...
    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

        var tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow)

        if (tileHere == TRACK_GOAL) { // goal here
            console.log(whichCar.name + " WINS!")
            loadLevel(levelOne);
        } else if (tileHere != TRACK_ROAD) { // obstacle here

            // these two lines prevent burrowing bug by
            // reverse incrementing car position
            // before changing speed
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

            whichCar.speed *= -0.5; // bounce back at half speed

        } // end else if not road
    } // end if within track field
} // end function carTrackHandling ---------------------------------------------

function rowColToArrayIndex(col, row) {
    return (row * TRACK_COLS) + col;
} // end function rowColToArrayIndex -------------------------------------------

function drawTracks() {

    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;

    for(var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
        for(var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];
            canvasContext.drawImage(useImg, drawTileX, drawTileY);

            drawTileX += TRACK_W;
            arrayIndex++;
        } // end for eachCol
        drawTileX = 0; // carriage return
        drawTileY += TRACK_H; // to next row
    } // end for eachRow

} // end function drawTracks ---------------------------------------------------
