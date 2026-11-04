export function renderProducts(products, viewMode = "grid") {

    const container = document.getElementById("products-grid");

    container.className = viewMode === "grid"
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "flex flex-col gap-4";

    if (products.length === 0) {
        container.innerHTML = "<p>Aucun produit trouvé.</p>";
        return;
    }

    container.innerHTML = products.map((product) => {

        return `
            <article class="border border-gray-200 rounded-xl p-3 bg-white shadow-sm">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="w-full h-40 object-cover rounded-lg"
                />

                <h3 class="font-bold text-gray-900 mt-3">
                    ${product.name}
                </h3>

                <p class="text-sm text-gray-500 mt-1">
                    ${product.category}
                </p>

                <p class="text-lg font-bold text-gray-900 mt-2">
                    ${product.price} ${product.currency}
                </p>

                <p class="text-sm text-gray-500 mt-1">
                    ${product.description}
                </p>

                <button
                    type="button"
                    data-id="${product.id}"
                    class="w-full mt-3 bg-red-600 text-white font-semibold py-2.5 px-4 rounded-lg"
                >
                    + Ajouter au panier
                </button>

            </article>
        `;

    }).join("");
}


export function renderPagination(totalPages, currentPage) {

    const container = document.getElementById("pagination");

    container.innerHTML = "";

    for (let page = 1; page <= totalPages; page++) {

        container.innerHTML += `
            <button
                data-page="${page}"
                class="border px-4 py-2 rounded ${
                    page === currentPage
                        ? "bg-red-600 text-white"
                        : "bg-white"
                }"
            >
                ${page}
            </button>
        `;
    }
}