export class Model {
    constructor() {
        this.products = [];
        this.bag = [];

    }

    getProducts() {
        return this.products;
    }

    setProducts(products) {
        this.products = products
    }
}