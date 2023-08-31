
// Find all of the necessary elements in the page
var menuCheckbox = document.getElementById("menu-check");
var menu = document.getElementById("header-nav");
// Get the initial values (so that they can be specified
// in CSS)
var initialOffset = menu.style.translate;
var initialShadow = menu.style.boxShadow;


function updateMenu(isChecked) {
    if(isChecked){
        // Moves the nav down, increases the shadow size
        menu.style.translate = "0 0";
        menu.style.boxShadow = `
            0 -10px 5px -10px black inset,
            0 10px 10px rgb(0,0,0, 0.3)`;
    } else {
        // Retracts the nav and shadow to its original position
        menu.style.translate = initialOffset;
        menu.style.boxShadow = initialShadow;
    }
}

// Add an event listener so that updateMode is called whenever the user clicks the checkbox
menuCheckbox.addEventListener("change", function() { updateMenu(menuCheckbox.checked); });

// For nav testing purposes, automatically opens it on load:
// updateMenu(true);