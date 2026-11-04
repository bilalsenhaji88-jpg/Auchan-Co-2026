import { fetchProducts } from "./api.js";
import { renderProducts } from "./ui.js";
import { filterProducts } from "./cart.js";

async function init() {

    const products = await fetchProducts();

    renderProducts(products);

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", (event) => {

        const searchValue = event.target.value;

        const filteredProducts = filterProducts(products, searchValue);

        renderProducts(filteredProducts);

    });
}

init();