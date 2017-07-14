var car1Pic  = document.createElement("img");
var car2Pic  = document.createElement("img");

var trackPics = [];

// var roadPic = document.createElement("img");
// var wallPic = document.createElement("img");
// var goalPic = document.createElement("img");
// var treePic = document.createElement("img");
// var flagPic = document.createElement("img");

var picsToLoad = 0; // set automatically in function loadImages

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
} // end function countLoadedImagesAndLaunchIfReady ----------------------------

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/" + fileName;
} // end function beginLoadingImage --------------------------------------------

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
} // end function loadImageForTrackCode ----------------------------------------


function loadImages() {
    var imageList = [
        {varName: car1Pic,      theFile: "player1car.png"},
        {varName: car2Pic,      theFile: "player2car.png"},
        {trackType: TRACK_ROAD, theFile: "track_road.png"},
        {trackType: TRACK_WALL, theFile: "track_wall.png"},
        {trackType: TRACK_GOAL, theFile: "track_goal.png"},
        {trackType: TRACK_TREE, theFile: "track_tree.png"},
        {trackType: TRACK_FLAG, theFile: "track_flag.png"}
        ];

    picsToLoad = imageList.length;

    for (var i = 0; i < imageList.length; i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName ,imageList[i].theFile )
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }

} // end function loadImages ---------------------------------------------------
