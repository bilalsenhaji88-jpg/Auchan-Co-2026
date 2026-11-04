export const filterProducts = (products, searchValue, category = "all") => {

    const search = searchValue.toLowerCase();

    return products.filter((product) => {

        const name = product.name.toLowerCase();
        const productCategory = product.category.toLowerCase();
        const description = product.description.toLowerCase();

        const matchesSearch =
            name.includes(search) ||
            productCategory.includes(search) ||
            description.includes(search);

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });
};


export const paginateProducts = (products, currentPage, itemsPerPage = 8) => {

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const pageProducts = products.slice(start, end);

    return {
        pageProducts,
        totalPages,
        currentPage
    };
};