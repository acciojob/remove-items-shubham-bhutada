//your JS code here. If required.
// Get references to the select element and the button
var colorSelect = document.getElementById("colorSelect");
var removeButton = document.querySelector('input[type="button"]');

// Add a click event listener to the button
removeButton.addEventListener("click", function () {
    // Get the selected option
    var selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    if (selectedOption) {
        // Remove the selected option
        colorSelect.removeChild(selectedOption);
    }
});
