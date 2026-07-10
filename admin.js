function addBook() {

    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let price = document.getElementById("price").value;

    if(bookName=="" || author=="" || price==""){
        alert("Please fill all fields");
        return;
    }

    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.push({
        name: bookName,
        author: author,
        price: price
    });

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Added Successfully!");

    document.getElementById("bookName").value="";
    document.getElementById("author").value="";
    document.getElementById("price").value="";
}