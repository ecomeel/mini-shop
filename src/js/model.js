export class Model {
    constructor() {
        this.products = [];
        this.bag = [];

    }

    getProducts() {
        return this.products;
    }

    getBag() {
        return this.bag;
    }

    setProducts(products) {
        this.products = products
    }

    addToBag(product) {
        this.bag.push(product)
        // количество в корзине
    }


}