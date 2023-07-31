export class View {
    constructor({
        openItemCard,
        addToBag
    }) {
        this.productsNode = document.getElementById("products");
        this.itemCardNode = document.getElementById('itemCard'); 
        this.addToBagFromProductsBtnNode = document.getElementById('addToBagFromProductsBtn');

        this.openItemCard = openItemCard;
        this.addToBag = addToBag;

        this.productsNode.addEventListener('click', this._handlerItemClick);
        // this.addToBagFromProductsBtnNode.addEventListener('click', this._handlerAddToBag)

    }

    renderProducts(products) {
        let productsHTML = "";
        products.forEach((product) => {
            productsHTML += `
                <li class="item">
                    <img class="item__img" src="${product.imgSrc}">
                    <div class="item__description">
                        <h3 class="item__title">${product.name}</h3>
                        <p class="item__subtitle">${product.model}</p>
                        <div class="item__to-bag-wrapper">
                            <p class="item__price">$ ${product.price}</p>
                            <button class="item__add-to-bag-btn black-btn">
                                <img src="/to-bag-mini.c3a1eed6.png" alt="to bag button">
                            </button>
                        </div>
                    </div>
                </li>
            `;
        });

        this.productsNode.innerHTML = productsHTML;
    }

    renderItemCard(product) {
        this.itemCardNode.innerHTML = `
        <div class="to-products-wrapper">
            <div id='closeItemCardBtn' class="to-products">
                <img src="img/buttons/back.png" alt="" />
                <p>Список товаров</p>
            </div>
        </div>
        <div class="main-info">
            <img
                class="item-card__img"
                src="${product.imgSrc}"
                alt="${product.name}"
            />
            <div class="item-card__text-wrapper">
                <h3 class="item-card__title">${product.name}</h3>
                <p class="item-card__sudtitle">${product.model}</p>
                <div class="rating">
                    <div class="rating__stars">
                        <img
                            src="img/buttons/star.png"
                            alt=""
                        />
                        <img
                            src="img/buttons/star.png"
                            alt=""
                        />
                        <img
                            src="img/buttons/star.png"
                            alt=""
                        />
                        <img
                            src="img/buttons/star.png"
                            alt=""
                        />
                        <img
                            src="img/buttons/half-star.png"
                            alt=""
                        />
                    </div>
                    <p class="rating__value">4.5 / 5</p>
                </div>
                <p class="item-card__price">$ ${product.price}</p>
                <p class="item-card__short-desc">${product.shortDesc}</p>
                <div class="item-card__btn-wrapper">
                    <button
                        class="item-card__add-to-bag-btn black-btn"
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
        <div class="item-card__description">
            <h2 class="item-card__desc-title">Описание</h2>
            <p class="item-card__long-desc">${product.fullDesc}</p>
        </div>
        `;
        this.productsNode.classList.toggle('deactivated');
        this.itemCardNode.classList.toggle('activated');
    }

    _handlerItemClick = (event) => {
        const target = event.target;
        const productNode = target.closest('li')
        const addToBagBtnNode = target.closest('button')

        if (!productNode) return

        const name = productNode.querySelector('.item__title').innerText;
        const model = productNode.querySelector('.item__subtitle').innerText;

        if (addToBagBtnNode) {
            this.addToBag(name, model)
        } else if (productNode) {
            this.openItemCard(name, model);
            const closeItemCardBtnNode = document.getElementById('closeItemCardBtn');
            closeItemCardBtnNode.addEventListener('click', this._handlerCloseItemCard)
        }
    }

    _handlerCloseItemCard = () => {
        this.productsNode.classList.toggle('deactivated');
        this.itemCardNode.classList.toggle('activated');
    }
}
