const PLACEHOLDER_IMAGE = "images/placeholder.jpg";

function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

function makeImage(url, altText, className) {
    const image = makeElement("img", className);
    image.src = url || PLACEHOLDER_IMAGE;
    image.alt = altText;
    image.onerror = function () {
        image.onerror = null;
        image.src = PLACEHOLDER_IMAGE;
    };
    return image;
}

function formatPrice(amount) {
    return "R" + Number(amount).toFixed(2);
}