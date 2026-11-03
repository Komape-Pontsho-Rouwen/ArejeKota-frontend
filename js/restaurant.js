const params = new URLSearchParams(window.location.search);
const restaurantId = params.get("id");

const restaurantTitle = document.getElementById("restaurantTitle");
const restaurantDetails = document.getElementById("restaurantDetails");
const categoryBar = document.getElementById("categoryBar");
const menuContainer = document.getElementById("menuContainer");

function groupByCategory(items) {
    const groups = {};
    items.forEach(function (item) {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
    });
    return groups;
}

function createFoodCard(item) {
    const card = makeElement("article", "card");

    const imageWrapper = makeElement("div", "card-image-wrapper");
    imageWrapper.appendChild(makeImage(item.imageUrl, item.name, "card-image"));

    if (item.badge) {
        imageWrapper.appendChild(makeElement("span", "card-badge", item.badge));
    }

    const addButton = makeElement("button", "add-button", "+");
    addButton.type = "button";
    imageWrapper.appendChild(addButton);
    card.appendChild(imageWrapper);

    const body = makeElement("div", "card-body");
    body.appendChild(makeElement("h3", "card-title", item.name));
    body.appendChild(makeElement("p", "card-price", formatPrice(item.price)));
    card.appendChild(body);

    return card;
}

function showCategory(categoryName, items) {
    const id = "category-" + categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const link = makeElement("a", "category-link", categoryName);
    link.href = "#" + id;
    categoryBar.appendChild(link);

    const title = makeElement("h2", "category-title", categoryName);
    title.id = id;
    menuContainer.appendChild(title);

    const grid = makeElement("div", "card-grid");
    items.forEach(function (item) {
        grid.appendChild(createFoodCard(item));
    });
    menuContainer.appendChild(grid);
}

async function showMenu() {
    if (!restaurantId) {
        menuContainer.textContent = "No restaurant selected.";
        return;
    }

    try {
        const menu = await getMenu(restaurantId);

        restaurantTitle.textContent = menu.restaurant.name;
        restaurantDetails.textContent = menu.restaurant.cuisine + " · " + menu.restaurant.rating + " ★";
        document.title = "arejeKota - " + menu.restaurant.name;

        if (menu.items.length === 0) {
            menuContainer.textContent = "This restaurant has not added any items yet.";
            return;
        }

        const groups = groupByCategory(menu.items);
        Object.keys(groups).forEach(function (categoryName) {
            showCategory(categoryName, groups[categoryName]);
        });
    } catch (error) {
        menuContainer.textContent = "Could not load the menu. Please try again later.";
    }
}

showMenu();