// Online Book Store
let cartCount = 0;

// Add book to cart
function addToCart(bookName) {
    cartCount++;

    alert(bookName + " has been added to your cart!");

    localStorage.setItem("cartCount", cartCount);

    updateCart();
}

// Update cart count
function updateCart() {
    let cartLink = document.getElementById("cartCount");

    if (cartLink) {
        cartLink.innerHTML = cartCount;
    }
}

// Load cart count
window.onload = function () {

    let savedCount = localStorage.getItem("cartCount");

    if (savedCount) {
        cartCount = parseInt(savedCount);
    }

    updateCart();
};let cartCount = 0;

function addToCart(bookName) {
    cartCount++;

    alert(bookName + " has been added to your cart!");

    localStorage.setItem("cartCount", cartCount);

    updateCart();
}

function updateCart() {
    let cartLink = document.getElementById("cartCount");

    if (cartLink) {
        cartLink.innerHTML = cartCount;
    }
}

window.onload = function () {
    let savedCount = localStorage.getItem("cartCount");

    if (savedCount) {
        cartCount = parseInt(savedCount);
    }

    updateCart();
};let cartCount = 0;

function addToCart(bookName) {
    cartCount++;

    alert(bookName + " has been added to your cart!");

    localStorage.setItem("cartCount", cartCount);

    updateCart();
}

function updateCart() {
    let cartLink = document.getElementById("cartCount");

    if (cartLink) {
        cartLink.innerHTML = cartCount;
    }
}

window.onload = function () {
    let savedCount = localStorage.getItem("cartCount");

    if (savedCount) {
        cartCount = parseInt(savedCount);
    }

    updateCart();
};
function addToCart(bookName, price) {
    cart.push({
        name: bookName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(bookName + " added to cart!");

    updateCartCount();
}
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((book) => {

        total += book.price;

        cartItems.innerHTML += `
            <div class="book-card">
                <h3>${book.name}</h3>
                <p>Price: ₹${book.price}</p>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerHTML =
        "Total: ₹" + total;
}

window.onload = function () {
    updateCartCount();
    displayCart();
};
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((book) => {

        total += book.price;

        cartItems.innerHTML += `
            <div class="book-card">
                <h3>${book.name}</h3>
                <p>Price: ₹${book.price}</p>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerHTML = "Total: ₹" + total;
}

window.onload = function () {
    updateCartCount();
    displayCart();
};