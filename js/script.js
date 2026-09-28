//Hamburger menu toggle 
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedMenuButton = menuButton.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {
            mobileMenu.style.display = "none";
        }
    });

}
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

/* Move between the OTP boxes as the user types*/

const otpBoxes = document.querySelectorAll(".otp-box");

otpBoxes.forEach(function (box, index) {
    box.addEventListener("input", function () {
        if (box.value.length === 1 && index < otpBoxes.length - 1) {
            otpBoxes[index + 1].focus();
        }
    });
});

/* 10 minute countdown timer */

let secondsLeft = 600;
const countdownDisplay = document.getElementById("countdown");

if (countdownDisplay) {
    const countdownInterval = setInterval(function () {
        secondsLeft--;

        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        const secondsPadded = seconds < 10 ? "0" + seconds : seconds;

        countdownDisplay.textContent = minutes + ":" + secondsPadded;

        if (secondsLeft <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "expired";
        }
    }, 1000);
}
