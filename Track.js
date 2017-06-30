
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var trackGrid = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                 1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                 1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
                 1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,
                 1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,
                 1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,
                 1,0,2,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,
                 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
                 1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,
                 1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,
                 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
// end vars --------------------------------------------------------------------

function isWallAtColRow(col, row) {
    // if inside track field ...
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
            var trackIndexUnderCoord = rowColToArrayIndex(col, row);
            return (trackGrid[trackIndexUnderCoord] == TRACK_WALL);
        } else { // outside track field, so no track
            return false;
        } // end if else
} // end function isWallAtColRow -----------------------------------------------

function carTrackHandling() {
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    // if car is within track field ...
    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

        // if wall is present ...
        if (isWallAtColRow(carTrackCol, carTrackRow)) {

            // these two lines prevent burrowing bug by
            // reverse incrementing car position
            // before changing carSpeed
            carX -= Math.cos(carAng) * carSpeed;
            carY -= Math.sin(carAng) * carSpeed;

            carSpeed *= -0.5;

        } // end if track true
    } // end if within track field
} // end function carTrackHandling ---------------------------------------------

function rowColToArrayIndex(col, row) {
    return (row * TRACK_COLS) + col;
} // end function rowColToArrayIndex -------------------------------------------

function drawTracks() {
    for(var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
        for(var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            if(trackGrid[arrayIndex] == TRACK_WALL) {
                colorRect(TRACK_W*eachCol, TRACK_H*eachRow, TRACK_W-TRACK_GAP, TRACK_H-TRACK_GAP, 'blue');
            } // end if
        } // end for eachCol
    } // end for eachRow
} // end function drawTracks ---------------------------------------------------
