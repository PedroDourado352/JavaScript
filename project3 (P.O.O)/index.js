/// properties and mathods of objects


    let bookTitle = 'The Great Gatsby'
    let bookAuthor = 'F. Scott Fitzgerald'
    let bookPages = 180
    let bookYear = 1925

function createBook(title, author, pages) {
    const book = {
    bookTitle: title,
    bookAuthor: author,
    bookPages: pages,

    printBook: function() {
        console.log('printing...')
    }
  }
}


const book1 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 180)

book.printBook()






