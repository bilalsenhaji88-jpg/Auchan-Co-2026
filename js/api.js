
export function fetchProducts() {

    const response = fetch("../data/data.json")
        .then(response => response.json());

    return response;
}