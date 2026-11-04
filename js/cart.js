export function filterProducts(products, searchValue) {
    const searchTerm = searchValue.toLowerCase().trim();

    return products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    });
}