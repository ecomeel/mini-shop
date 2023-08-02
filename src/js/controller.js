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

    _handlerAddToBag = (name, model) => {
        console.log(`${name} - ${model} : was added`);
        const products = 
    }

    // при клике на кнопку добавления в консоль имя и модель
}