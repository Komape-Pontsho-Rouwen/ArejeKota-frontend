const API_BASE = "http://localhost:8080/api";

async function getRestaurants() {
    const response = await fetch(API_BASE + "/restaurants");
    if (!response.ok) {
        throw new Error("Could not load restaurants");
    }
    return response.json();
}

async function getMenu(restaurantId) {
    const response = await fetch(API_BASE + "/restaurants/" + restaurantId + "/menu");
    if (!response.ok) {
        throw new Error("Could not load the menu");
    }
    return response.json();
}