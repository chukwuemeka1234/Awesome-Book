const Books = JSON.parse(localStorage.getItem('booksData')) || [];

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    let id = 1;
    if (Books.length > 0) {
      id = Books[Books.length - 1].id + 1;
    }
    const book = { id, title, author };
    if (Books !== null) {
      Books.push(book);
      const convertedBooks = JSON.stringify(Books);
      localStorage.setItem('booksData', convertedBooks);
      window.location.reload();
    } else {
      Books.push(book);
      const convertedBooks = JSON.stringify(Books);
      localStorage.setItem('booksData', convertedBooks);
      window.location.reload();
    }
  };

  displayBooks = () => {
    const convertedBooks = Books;
    document.getElementById('bookstatus').innerHTML = 'No books added';
    if (convertedBooks && convertedBooks.length === 0) {
      document.getElementById('bookstatus').innerHTML = 'No books added';
    } else {
      document.getElementById('bookstatus').innerHTML = '';
      let html = '';
      convertedBooks.forEach((book) => {
        html += `<article class = "article-display">
        <p class = "article-text">"${book.title}"  by  ${book.author}</p>
        <button class = "remove-btn" data-book-id = "${book.id}" id = "remove-button" onclick="removeBook(${book.id})">Remove</button>
    </article>`;
      });
      document.getElementById('bookslist').innerHTML = html;
    }
  };
}

// eslint-disable-next-line no-unused-vars
const removeBook = (id) => {
  const convertedBooks = Books;
  const remainingBooks = convertedBooks.filter((book) => book.id !== id);
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('booksData', removedBooks);
  window.location.reload();
};

document.getElementById('addbook').addEventListener('click', () => {
  const book = new Book();
  book.addBook();
});

/* global luxon */
/* eslint no-undef: "error" */
window.addEventListener('DOMContentLoaded', () => {
  const book = new Book();
  book.displayBooks();
  const { DateTime } = luxon;
  const today = DateTime.local();
  const dateOutput = document.getElementById('date');
  dateOutput.innerHTML = JSON.stringify(today.setLocale('en-US').toLocaleString(DateTime.DATETIME_MED));
});

const bookAdd = document.querySelector('.addbook-container');
const bookDisplay = document.querySelector('.form-container');
const contactBook = document.querySelector('.contact-container');
const listId = document.getElementById('list-id');
const addId = document.getElementById('add-id');
const contactId = document.getElementById('contact-id');

// Added books
function openBooksContainer() {
  bookAdd.style.display = 'flex';
  bookDisplay.style.display = 'none';
  contactBook.style.display = 'none';
}

listId.addEventListener('click', openBooksContainer);

// Books display
function addBookDisplay() {
  bookAdd.style.display = 'none';
  bookDisplay.style.display = 'flex';
  contactBook.style.display = 'none';
}

addId.addEventListener('click', addBookDisplay);

// Contact
function contactDisplay() {
  bookAdd.style.display = 'none';
  bookDisplay.style.display = 'none';
  contactBook.style.display = 'block';
}

contactId.addEventListener('click', contactDisplay);