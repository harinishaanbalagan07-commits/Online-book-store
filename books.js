function loadBooks() {

    let books = JSON.parse(localStorage.getItem("books")) || [];

    let container = document.getElementById("bookContainer");

    if (!container) return;

    container.innerHTML = "";

    books.forEach(function(book) {

        container.innerHTML += `
            <div class="book-card">
                <h3>${book.name}</h3>
                <p>Author: ${book.author}</p>
                <p>₹${book.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}

window.onload = loadBooks;
function searchBooks() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let cards = document.getElementsByClassName("book-card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}