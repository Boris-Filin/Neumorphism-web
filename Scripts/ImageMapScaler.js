/*
Note: the program assumes that the image aspect
ratio remains constant and the relative change
in width is the same for x and y.
*/

// Get the necessary elements
var map = document.getElementById("map-scalable");
var image = document.getElementById("map-scalable-image");

// Find the fullscale dimensions of the image
var initialDimensions = [image.naturalWidth, image.naturalHeight];
// Get the coords. The program assumes the coords are given as pixel
// positions in the image file.
var initialCoords = getCoords(map);

// This function finds all of the areas and returns their coordinates
function getCoords(map){
    childCoords = []
    for(const child of map.children){
        if(child.hasAttribute("coords"))
            childCoords.push(parseCoords(child));
    }
    return childCoords
}

// This function converts the string coords from CSS to a list of ints
function parseCoords(el){
    coords = el.coords;
    if(coords == undefined) return undefined;
    coordsList = [];
    for(let strCoord of coords.split(','))
        coordsList.push(parseInt(strCoord));
    return coordsList
}

// This function updates the coordinates for a specific area
// given the new dimensions of the image
function updateCoords(coords, dim, initDim){
    newCoords = []
    fac = dim[0] / initDim[0];
    for(const coord of coords)
        newCoords.push(coord * fac);
    return newCoords
}

// This function looks through all of the areas and updates their coords
function updateMap(map, img){
    i = 0;
    dim = [img.clientWidth, img.clientHeight];
    for(const child of map.children){
        if(!child.hasAttribute("coords")) continue;
        child.coords = updateCoords(
            initialCoords[i], dim, initialDimensions).toString();
        i++;
    }
}


// Update the coords on start, in case the image is already not full-size
updateMap(map, image);
// Update the coords every time the window is resized
window.onresize = function(){ updateMap(map, image) }