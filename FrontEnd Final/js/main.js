// Get the #myLink, and when the user clicks on it, execute myFunction
document.querySelector('#myLink').onclick = function() {
    myDropdown()
};

// myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content
function myDropdown() {
    document.querySelector('#dropdown').classList.toggle("show");
}


document.querySelector('#mySecondLink').onclick = function() {
    mySecondDropdown()
};
function mySecondDropdown() {
    document.querySelector('#secondDropdown').classList.toggle("show2");
}