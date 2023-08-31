
// This finds the accessibility checkbox;
var accessCheckbox = document.getElementById("access-check");

// This line looks in the session storage to see if the page
// The user has come from had the accessibility mode on.
// That allows it to stay constant when going to a different page
// Without the user having to toggle it every time.
var accessibilityMode = sessionStorage.getItem("accessibilityMode");


var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'Styles/Neumorphism/Accessibility.css');


// The actual function that updates the colors
function updateMode(isOn) {
    // Store the mode for future use
    sessionStorage.setItem("accessibilityMode", isOn);

    if (isOn) {
        // Enable the stylesheet with the accessibility mode
        document.head.appendChild(link);
    } else {
        // Disable the dedicated stylesheet
        document.head.removeChild(link);
    }
}

// Add an event listener so that updateMode is called whenever the user clicks the checkbox
accessCheckbox.addEventListener("change", function() { updateMode(accessCheckbox.checked); });

// Check if the mode was on when the page was loaded, if so - toggle the colors to on.
if(sessionStorage.getItem("accessibilityMode") == "true") {
    accessCheckbox.checked = true;
    updateMode(true);
}
