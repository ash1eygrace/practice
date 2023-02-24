const exampleBooks = 
[
      {
      "title": "Dune",
      "author": "Frank Herbert",
      "pages": "658",
      "tbr": true
	},
    {
      "title": "Childhood's End",
      "author": "Arthur C. Clarke",
      "pages": "224",
      "tbr": true
      },
    {
      "title": "The Three-Body Problem",
      "author": "Liu Cixin",
      "pages": "399",
      "tbr": false
      },
    {
      "title": "Artemis",
      "author": "Andy Weir",
      "pages": "305",
      "tbr": false
      },
]

let bookList = [];

function Book(title, author, pages, tbr) {
    this.title = title
    this.author = author
    this.pages = pages
    this.tbr = tbr
}
/* display exampleBooks via displayBooks */
function displayExampleBooks(){
      for (let i = 0; i < exampleBooks.length; i++){
            let book = new Book(exampleBooks[i].title, exampleBooks[i].author, exampleBooks[i].pages, exampleBooks[i].tbr);
            bookList.push(book);
            displayBooks(book);
      }
}
displayExampleBooks();


/* add new book event on form submit */
addNewBook = document.getElementById('add-book')
addNewBook.addEventListener('submit', (event) => {
      //prevent default form
      event.preventDefault();

      addBookToLibrary();
});

function addBookToLibrary (){
      // push Book object to bookList array with form values
      const title = document.getElementById('form-title').value;
      const author = document.getElementById('form-author').value;
      const pages  = document.getElementById('form-pages').value;
      const tbr  = document.getElementById('form-tbr').value;
      newBook = bookList.push(new Book(title, author, pages, tbr));
      
      displayBooks();
}

/* Loop bookList array and display on page  */
function displayBooks(){

      const bookCards = document.getElementById("books");
      bookCards.innerHTML = "";

      for ( i in bookList ) {
            /* Generate cards for each Book Object in array */
            bookCards.innerHTML += '<div id="book-card-' + i + '" class="book-card"></div>';

            /* Generate divs for Book Object props in array */
            const bookDetails = document.getElementById("book-card-" + i);
                  bookDetails.innerHTML += `
                  <div id="title-${i}" class="title"></div>
                  <div id="author-${i}" class="author"></div>
                  <div id="pages-${i}" class="pages"></div>
                  <div id="tbr-${i}" class="tbr"></div>
                  `;


            /* Add Book object propts to innerText of divs above */
            const bookTitle = document.getElementById("title-" + i);
                  bookTitle.innerText += bookList[i].title;
            
            const bookAuthor = document.getElementById("author-" + i);
                  bookAuthor.innerText += bookList[i].author;

            const bookPages = document.getElementById("pages-" + i);
                  bookPages.innerText += bookList[i].pages;

            const bookTBR = document.getElementById("tbr-" + i);
                  bookTBR.innerText += bookList[i].tbr;
      }
}

