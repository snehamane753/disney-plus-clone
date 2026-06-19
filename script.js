console.log("JS Loaded Successfully");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
    console.log("Searching:", searchInput.value);
});