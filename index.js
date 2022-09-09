let myLibrary = [];
const library = document.getElementById("library");

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// book.prototype.info = function() {
//     return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
// }

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

const book1 = new book("hobbit", "JJR", "225", true);
addBookToLibrary(book1);
console.log(myLibrary);

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
    }
}