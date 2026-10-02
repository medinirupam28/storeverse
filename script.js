function validateForm() {

    let name = document.getElementById("owner").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name.length < 3) {
        alert("Enter a valid owner name");
        return false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    if (password != confirm) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration successful!");
    return true;
}

function searchProducts() {

    let text = document.getElementById("search")
                       .value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let name = product.querySelector("h3")
                          .textContent.toLowerCase();

        product.style.display =
            name.includes(text) ? "block" : "none";
    });
}


function addCart(product) {
    alert(product + " added to cart!");
}
function loadProducts() {

    fetch("products.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("textProducts")
                    .innerText = data;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
function loadJSON() {

    fetch("products.json")
        .then(response => response.json())
        .then(data => {

            let output = "";

            data.forEach(product => {
                output +=
                    product.name + " - " +
                    product.category + " - ₹" +
                    product.price + "\n";
            });

            document.getElementById("jsonProducts")
                    .textContent = output;
        });
}
function addProduct() {

    let product = {
        name: document.getElementById("pname").value,
        category: document.getElementById("pcategory").value,
        price: document.getElementById("price").value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("postResult").textContent =
            JSON.stringify(data, null, 2);
    });
}