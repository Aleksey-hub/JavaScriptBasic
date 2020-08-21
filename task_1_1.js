/*1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
конструктор Product, который принимает параметры name и price, сохраните 
их как свойства объекта. Также объекты типа Product должны иметь метод 
make25PercentDiscount, который будет уменьшать цену в объекте на 25%.*/
'use strict';

//es5
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75;
}

const product1 = new ProductES5('Холодильник', 100);
product1.make25PercentDiscount();

//es6
class ProductES6 {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount(){
        this.price = this.price * 0.75;
    }
}

const product2 = new ProductES6('Телевизор', 200);
product2.make25PercentDiscount();