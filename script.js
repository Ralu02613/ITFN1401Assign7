// Function to display the last modified date
function displayLastModified() {
    // Get the last modified date of the page
    var lastModified = document.lastModified;
    
    // Get the div element where we'll display the date
    var modifiedDiv = document.getElementById("lastModified");
    
    // Set the innerHTML to display the date
    modifiedDiv.innerHTML = "Last Modified: " + lastModified;
}