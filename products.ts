interface Product {
    name: string;
    price: number;
}

class Store {
    constructor(public product: Product) {}

    display() {
        console.log(this.product.name);
        console.log(this.product.price);
    }
}

function showProduct(product: Product) {
    console.log("Product:", product.name);
    console.log("Price:", product.price);
}

let product: Product = {
    name: "Laptop",
    price: 50000
};

let store = new Store(product);

store.display();
showProduct(product);