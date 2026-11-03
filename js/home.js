const restaurantGrid = document.getElementById("restaurantGrid");

function createRestaurantCard(restaurant) {
    const card = makeElement("a", "card");
    card.href = "restaurant.html?id=" + restaurant.id;

    const imageWrapper = makeElement("div", "card-image-wrapper");
    imageWrapper.appendChild(makeImage(restaurant.imageUrl, restaurant.name, "card-image"));
    card.appendChild(imageWrapper);

    const body = makeElement("div", "card-body");
    body.appendChild(makeElement("h3", "card-title", restaurant.name));
    body.appendChild(makeElement("p", "card-text", restaurant.cuisine + " · " + restaurant.rating + " ★"));
    card.appendChild(body);

    return card;
}

async function showRestaurants() {
    try {
        const restaurants = await getRestaurants();
        restaurantGrid.innerHTML = "";

        if (restaurants.length === 0) {
            restaurantGrid.textContent = "No restaurants available yet.";
            return;
        }

        restaurants.forEach(function (restaurant) {
            restaurantGrid.appendChild(createRestaurantCard(restaurant));
        });
    } catch (error) {
        restaurantGrid.textContent = "Could not load restaurants. Please try again later.";
    }
}

showRestaurants();