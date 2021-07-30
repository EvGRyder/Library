console.log("hi");

let Library = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function AddBookToLibrary(book) {
    Library.push(book)
}

const myBook = new Book("me", "moi", 1)
console.log(myBook);
console.log(Library);
AddBookToLibrary(myBook)
console.log(Library);

