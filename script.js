console.log("hi");

///=== DOM QUERIES ===//
const shelf = document.querySelector('#bookshelf')

let Library = []

class Book {
    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read || false
    }
    makeFlash() {
        makeCard(this);
    }

    toggleRead() {
        this.read = !this.read
    }
}



function AddBookToLibrary(book) {
    Library.push(book)
    book.id = Library.indexOf(book)
}

const myBook = new Book("ayy", "du", 1, true)
const youBook = new Book("lmao", "da", 1, true)
const cookingBook = new Book("Omelet du Fromage", "bruh", 666, false)

console.log(Library);
AddBookToLibrary(myBook)
AddBookToLibrary(youBook)
AddBookToLibrary(cookingBook)

// === Card Creator === //
function makeCard(book) {
    const card = document.createElement("div")

    
    const domTitle = document.createElement("div")
    card.appendChild(domTitle)
    const domAuthor = document.createElement("div")
    card.appendChild(domAuthor)
    const domPages = document.createElement("div")
    card.appendChild(domPages)
    const domRead = document.createElement("div")
    domRead.classList.add("read")
    card.appendChild(domRead)


    domTitle.textContent = "Title: " + book.title
    domTitle.classList.add("title")

    domAuthor.textContent = "Author: " + book.author

    domPages.textContent = "Total pages: " + book.pages

    domRead.textContent = "Read? " + book.read

    rmvBtn(card)
    readBtn(book, card)

    card.classList.add("card")
    card.id = book.id
    shelf.appendChild(card)
}

// Make Cancel Button Function
const rmvBtn = function(card) {
    let rmvButton = document.createElement("button")
    rmvButton.classList.add("cancelButton")
    rmvButton.textContent = "Remove"
    rmvButton.addEventListener('click', () => {
        Library = Library.filter(book => book.id != card.id)
        shelf.removeChild(card)
        console.log(Library);
    })
    card.appendChild(rmvButton)
}
// Make Read Button Function
const readBtn = function(book, card) {
    let readButton = document.createElement("button")
    readButton.classList.add("readButton")
    readButton.textContent = "Read"
    readButton.addEventListener('click', () => {
        book.toggleRead()
        let readi = card.querySelector(".read")
        readi.textContent = `Read? ${book.read}`
    })
    card.appendChild(readButton)
}



function initLibrary() {
    Library.forEach(book => {
        console.log(book);
        book.makeFlash()
    })
}
initLibrary()


//== Event Listeners ==//
const myForm = document.querySelector('#myForm')
const submitButton = myForm.querySelector('#submitButton')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let author = myForm.querySelector('#author')
    let title = myForm.querySelector('#title')
    let pages = myForm.querySelector('#pages')
    let read = myForm.querySelector('#read')

    let newBook = new Book(title.value, author.value, pages.value, read.checked)
    AddBookToLibrary(newBook)
    
    makeCard(newBook)
    myForm.reset()
})

//== Cancel Button Listener ==//
