let myLibrary = [];
const library = document.getElementById("library");
const newBook = document.querySelector(".add-button");
const form = document.getElementById("form");
const mask = document.getElementById("page-mask");

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// book.prototype.read = function() {
//     
// }

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

const book1 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book1);
const book2 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book2);
const book3 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book3);
const book4 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book4);
const book5 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book5);
const book6 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book6);
const book7 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book7);
console.log(myLibrary);
displayBooks();

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.classList.add("book");
        library.appendChild(div);
        for(const book in myLibrary[i]) {
            const p = document.createElement("p");
            p.textContent = `${myLibrary[i][book]}`;
            div.appendChild(p);
        }
        const remove = document.createElement("button");
        remove.textContent = "Remove"
        div.appendChild(remove);
    }
}

newBook.addEventListener("click", () => {
    mask.style.visibility = "visible";
    form.style.visibility = "visible";
});

function closeForm() {
    form.style.visibility = "hidden";
}
