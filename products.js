"use strict";
class Store {
    product;
    constructor(product) {
        this.product = product;
    }
    display() {
        console.log(this.product.name);
        console.log(this.product.price);
    }
}
function showProduct(product) {
    console.log("Product:", product.name);
    console.log("Price:", product.price);
}
let product = {
    name: "Laptop",
    price: 50000
};
let store = new Store(product);
store.display();
showProduct(product);
