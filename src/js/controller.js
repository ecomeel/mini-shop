import { Model } from './model';
import { View } from './view';
import { Storage } from './storage';

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            openItemCard: this._handlerOpenItemCard
        });
        
        this.storage = new Storage();
    }

    init() {
        this.storage.pullProducts()
            .then( products => {
                this.model.setProducts(products);
                this.view.renderProducts(this.model.getProducts())
            })

    }

    _handlerOpenItemCard = (name, model) => {
        const products = this.model.getProducts();
        products.forEach(product => {
            if (product.name == name && product.model == model) {
                this.view.renderItemCard(product)
            } 
        });
    }
}