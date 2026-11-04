export function renderProducts(products) {

    const container = document.getElementById("products-grid");

    container.innerHTML = "";

    for (const product of products) {

        container.innerHTML += `
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
                    ${product.price} DH
                </p>

                <button type="button"
                    class="w-full mt-3 bg-red-600 text-white font-semibold py-2.5 px-4 rounded-lg">
                    + Ajouter au panier
                </button>
            </article>
        `;
    }
}