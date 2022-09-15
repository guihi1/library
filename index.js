let myLibrary = [];
const library = document.getElementById("library");
const newBook = document.querySelector(".add-button");
const form = document.getElementById("form");
const mask = document.getElementById("page-mask");
const select = document.querySelector(".select");
const addButton = document.getElementById("add-book");

class book {
    constructor(title, author, pages, date, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date = date;
        this.read = read;
    }
    readStatus = () => {
        if(this.read){
            this.read = false;
        } else {
            this.read = true;
        }
    }
    addBookToLibrary = () => {
        myLibrary.push(this);
    }
}

addButton.addEventListener("click", () => {
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("date").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name="read-status"]:checked').value;
    let isTrue = (read === "true");
    const newBook = new book(title, author, pages, year, isTrue);
    mask.style.visibility = "hidden";
    form.style.visibility = "hidden";
    newBook.addBookToLibrary();
    displayBooks();
});

const book1 = new book("The Hobbit", "J. R. R. Tolkien", "310", "1937", true);
book1.addBookToLibrary();
const book2 = new book("Dom Casmurro", "Machado de Assis", "210", "1900", false);
book2.addBookToLibrary();
const book3 = new book("A Hora da Estrela", "Clarice Lispector", "87", "1977",true);
book3.addBookToLibrary();
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
            } else if(book == "date") {
                const p = document.createElement("p");
                p.textContent = `Publication date: ${myLibrary[i][book]}`;
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

select.addEventListener("click", () => {
    let val = document.querySelector(".select").value;
    if(val == "pages") {
        myLibrary.sort((a, b) => Number(a.pages) > Number(b.pages) ? 1 : -1);
    } else if(val == "date") {
        myLibrary.sort((a, b) => Number(a.date) > Number(b.date) ? 1 : -1);
    }
    displayBooks()
});