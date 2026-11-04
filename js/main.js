import { fetchProducts } from "./api.js";
import { filterProducts, paginateProducts } from "./products.js";
import { renderProducts, renderPagination } from "./ui.js";

fetchProducts()
    .then((products) => {
        let currentPage = 1;
        let itemsPerPage = 8;
        let selectedCategory = "all";
        let viewMode = "grid";

        const searchInput = document.getElementById("searchInput");
        const categoryButtons = document.querySelectorAll("#categories button");
        const pagination = document.getElementById("pagination");
        const itemsSelect = document.getElementById("itemsPerPage");
        const gridButton = document.getElementById("btn-grid");
        const listButton = document.getElementById("btn-list");

        function displayCatalog() {
            const filteredProducts = filterProducts(
                products,
                searchInput.value,
                selectedCategory
            );

            const result = paginateProducts(
                filteredProducts,
                currentPage,
                itemsPerPage
            );

            currentPage = result.currentPage;

            renderProducts(result.pageProducts, viewMode);
            renderPagination(result.totalPages, currentPage);
        }

        searchInput.addEventListener("input", () => {
            currentPage = 1;
            displayCatalog();
        });

        categoryButtons.forEach((button) => {
            button.addEventListener("click", () => {
                selectedCategory = button.dataset.category;
                currentPage = 1;

                categoryButtons.forEach((btn) => {
                    btn.classList.remove("bg-red-600", "text-white");
                    btn.classList.add("bg-gray-200", "text-gray-700");
                });

                button.classList.add("bg-red-600", "text-white");
                button.classList.remove("bg-gray-200", "text-gray-700");

                displayCatalog();
            });
        });

        itemsSelect.addEventListener("change", (event) => {
            itemsPerPage = Number(event.target.value);
            currentPage = 1;
            displayCatalog();
        });

        pagination.addEventListener("click", (event) => {
            const button = event.target.closest("[data-page]");

            if (!button || button.disabled) return;

            currentPage = Number(button.dataset.page);
            displayCatalog();
        });

        gridButton.addEventListener("click", () => {
            viewMode = "grid";
            displayCatalog();
        });

        listButton.addEventListener("click", () => {
            viewMode = "list";
            displayCatalog();
        });

        displayCatalog();
    })
    .catch((error) => {
        console.error("Error loading products:", error);
    });