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

book.prototype.readStatus = function() {
    if(this.read){
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

const book1 = new book("hobbit", "JJR", "1", true);
addBookToLibrary(book1);
const book2 = new book("hofds", "JJR", "2", false);
addBookToLibrary(book2);
const book3 = new book("dfsft", "JJR", "3", true);
addBookToLibrary(book3);
const book4 = new book("fdsfs", "JJR", "4", false);
addBookToLibrary(book4);
const book5 = new book("fdsfsdf", "JJR", "5", true);
addBookToLibrary(book5);
const book6 = new book("fsdfsd", "JJR", "6", false);
addBookToLibrary(book6);
const book7 = new book("hfdsf", "JJR", "7", true);
addBookToLibrary(book7);
console.log(myLibrary);
displayBooks();

function displayBooks() {
    while(library.firstChild){
        library.removeChild(library.lastChild);
    }
    for(let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.classList.add("book");
        library.appendChild(div);
        for(const book in myLibrary[i]) {
            if(book == "title") {
                const p = document.createElement("p");
                p.classList.add("title");
                p.textContent = `${myLibrary[i][book]}`;
                div.appendChild(p);
            } else if(book == "author") {
                const p = document.createElement("p");
                p.textContent = `${myLibrary[i][book]}`;
                div.appendChild(p);
            } else if(book == "pages") {
                const p = document.createElement("p");
                p.textContent = `${myLibrary[i][book]} pages`;
                div.appendChild(p);
            } else if(book == "read"){
                if(myLibrary[i]["read"]) {
                const p = document.createElement("p");
                p.textContent = "Read";
                div.appendChild(p);
                } else {
                    const p = document.createElement("p");
                    p.textContent = "Not read yet";
                    div.appendChild(p);
                }
            } 
        }
        const reading = document.createElement("button");
        reading.textContent="Change read status";
        reading.classList.add("reading");
        div.appendChild(reading);
        reading.addEventListener("click", () => {
            myLibrary[i].readStatus();
            displayBooks();
        });
        const remove = document.createElement("button");
        remove.textContent = "Remove"
        remove.classList.add("remove");
        div.appendChild(remove);
        remove.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
    }
}

newBook.addEventListener("click", () => {
    mask.style.visibility = "visible";
    form.style.visibility = "visible";
});