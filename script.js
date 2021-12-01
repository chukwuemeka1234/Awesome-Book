const Books = JSON.parse(localStorage.getItem('booksData')) || [];

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.isbn = id;
  }

  addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { id: new Date().getTime(), title, author };
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
        html += `<article>
        <h4>${book.title}</h4>
        <h4>${book.author}</h4>
        <button data-book-id = "${book.id}" id = "remove-button" onclick="removeBook(${book.id})">Remove</button>
    </article></br><hr>`;
      });
      document.getElementById('bookslist').innerHTML = html;
    }
  };
}

// eslint-disable-next-line no-unused-vars //
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

window.addEventListener('DOMContentLoaded', () => {
  const book = new Book();
  book.displayBooks();
});
