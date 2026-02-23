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
  return book
}

const book1 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 180)

console.log(book1)

///////////////////////

function createBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;

}

const book2 = new createBook('The Great Gatsby', 'F. Scott Fitzgerald', 180)

console.log(book2)

///////garbage collection//////////

////objetos built in

console.log(Math.max(1, 2, 3, 4, 5))

//////////Strings//////////

/////template literals

let firstName = 'John'

const email = 'Hi ' + firstName + ', \n how are you?'
const email2 = `Hi ${firstName}, how are you?`



console.log(email)
console.log(email2)


/////// challenge
















