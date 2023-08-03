import { Model } from './model';
import { View } from './view';
import { Storage } from './storage';

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            openItemCard: this._handlerOpenItemCard,
            addToBag: this._handlerAddToBag
        });
        this.storage = new Storage();
    }

    init() {
        this.storage.pullProducts()
            .then( products => {
                this.model.setProducts(products);
                this.view.renderProducts(this.model.getProducts());
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

    _handlerAddToBag = (name, model) => {
        const products = this.model.getProducts();
        products.forEach(product => {
            if (product.name == name && product.model == model) {
                this.model.addToBag(product);
                this.storage.pushBag(product);
            }
        });
        // console.log(this.model.getBag())
        
        console.log(this.model.getBag())

    }

    
}