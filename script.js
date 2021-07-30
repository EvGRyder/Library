console.log("hi");

///== DOM QUERIES ==//
const shelf = document.querySelector('#bookshelf')

let Library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function AddBookToLibrary(book) {
    Library.push(book)
}

const myBook = new Book("ayy", "du", 1, true)
const youBook = new Book("lmao", "da", 1, true)
const cookingBook = new Book("Omelet du Fromage", "bruh", 666, false)

console.log(Library);
AddBookToLibrary(myBook)
AddBookToLibrary(youBook)
AddBookToLibrary(cookingBook)

function listBooks() {
    Library.forEach(book => {
        book.id = Library.indexOf(book)
        console.log(book);
        makeCard(book)
    })
}

function makeCard(book) {
    const card = document.createElement("div")
    
    const domTitle = document.createElement("div")
    card.appendChild(domTitle)
    const domAuthor = document.createElement("div")
    card.appendChild(domAuthor)
    const domPages = document.createElement("div")
    card.appendChild(domPages)
    const domRead = document.createElement("div")
    card.appendChild(domRead)

    domTitle.textContent = "Title: " + book.title
    domTitle.classList.add("title")

    domAuthor.textContent = "Author: " + book.author

    domPages.textContent = "Total pages: " + book.pages

    domRead.textContent = "Read?: " + book.read

    card.classList.add("card")
    shelf.appendChild(card)
}

listBooks()