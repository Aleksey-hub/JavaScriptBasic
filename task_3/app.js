'use strict';

window.addEventListener('load', function () {
    let toBasketBtn = document.querySelectorAll('.product_button');
    toBasketBtn.forEach(function (button) {
        button.addEventListener('click', function (event) {
            let id = event.target.dataset.id;
            let name = event.target.dataset.name;
            let price = event.target.dataset.price;
            basket.init(id, name, price);
        })
    });
    //basket.init();
});

let basket = {
    products: {},

    lastChangeIdProduct: '',
    
    totalSum: 0,

    init(id, name, price) {
        this.addProductToProducts(id, name, price);
        this.addProductToBasket();
        this.buttonDeleteInBasket(id);
        this.CalcTotalSum();
    },

    addProductToProducts(id, name, price) {
        if (this.products[id] != undefined) {
            this.products[id].count++;
        } else {
            this.products[id] = {
                name: name,
                price: price,
                count: 1
            };
        };
        this.lastChangeIdProduct = id;
    },

    addProductToBasket() {
        let tableBasket = document.querySelector('.table tbody');
        let countProduct = document.querySelector(`.count_product[data-id="${this.lastChangeIdProduct}"]`);
        if (countProduct) {
            countProduct.textContent++;
        } else {
            tableBasket.insertAdjacentHTML('beforeend', `<tr>
                                                        <th scope="row">${this.lastChangeIdProduct}</th>
                                                        <td>${this.products[this.lastChangeIdProduct].name}</td>
                                                        <td>${this.products[this.lastChangeIdProduct].price}</td>
                                                        <td class="count_product" data-id=${this.lastChangeIdProduct}>${this.products[this.lastChangeIdProduct].count}</td>
                                                        <td><button data-id=${this.lastChangeIdProduct} class="removeButton">Del</button></td>
                                                    </tr>`);
        };
    },

    buttonDeleteInBasket() {
        let removeButtons = document.querySelectorAll('.removeButton');
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', this.deleteInBasket);
        };
    },

    deleteInBasket(event) {
        let idProductRemove = event.target.dataset.id;
        let countProduct = document.querySelector(`.count_product[data-id="${idProductRemove}"]`);
        if (countProduct.textContent > 1) {
            countProduct.textContent--;
            basket.products[idProductRemove].count--;
        } else {
            countProduct.parentElement.remove();
            delete basket.products[idProductRemove];
        };
        basket.CalcTotalSum();
    },

    CalcTotalSum() {
        this.totalSum = 0;
        for(let product in this.products) {
            this.totalSum += this.products[product].price * this.products[product].count;
        };
        document.querySelector('.total_sum').textContent = this.totalSum;
    }
}
