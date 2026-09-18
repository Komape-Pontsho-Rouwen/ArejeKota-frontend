//Hamburger menu toggle 
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.getElementById("mobileMenu");

/* Toggle the menu open/closed when hamburger is clicked */
menuButton.addEventListener("click", function () {
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
});

/* Close the menu if the user clicks anywhere outside it */
document.addEventListener("click", function (event) {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        mobileMenu.style.display = "none";
    }
});