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