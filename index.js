const SESSION_KEY = "APP_V1";
const isSession = localStorage.getItem(SESSION_KEY);
const specItems = document.querySelectorAll(".spec-items");

//Activate a specific session
function activateTab(buttonIndex) {
    specItems.forEach(function(item, index) {
        if (buttonIndex == index) {
            item.classList.add("active");
            // Store tab number in the localstorage
            localStorage.setItem(SESSION_KEY, index);
        } else {
            item.classList.remove("active");
        }
    });
}
// Check a seesion then activate tab
isSession && activateTab(isSession);
//Add click listeners to buttons
document.querySelectorAll(".spec-items .button").forEach(function(button) {
    button.addEventListener("click", function() {
        activateTab(button.dataset.index);
    });
});