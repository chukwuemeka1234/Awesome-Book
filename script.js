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
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
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
      document.getElementById('bookstatus').innerHTML = html;
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
  book.displayBooks();
  book.addBook();
});

window.addEventListener('DOMContentLoaded', () => {
  const book = new Book();
  book.displayBooks();
});

const d = new Date();
document.getElementById('date').innerHTML = d;

document.getElementById('bookstatus').style.display = 'block';
document.getElementById('awesome-text').style.display = 'block';
document.getElementById('add-book').style.display = 'none';
document.getElementById('contact').style.display = 'none';
document.getElementById('list').style.color = 'blue';


document.getElementById('add-new').addEventListener('click', () => {
  document.getElementById('add-book').style.display = 'block';
  document.getElementById('bookstatus').style.display = 'none';
  document.getElementById('awesome-text').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('add-new').style.color = 'blue';
  document.getElementById('list').style.color = 'black';
  document.getElementById('contact-click').style.color = 'black';
});

document.getElementById('list').addEventListener('click', () => {
  window.location.reload();
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('bookstatus').style.display = 'block';
  document.getElementById('awesome-text').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('add-new').style.color = 'black';
  document.getElementById('list').style.color = 'blue';
  document.getElementById('contact-click').style.color = 'black';
});

document.getElementById('contact-click').addEventListener('click', () => {
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('bookstatus').style.display = 'none';
  document.getElementById('awesome-text').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('add-new').style.color = 'black';
  document.getElementById('list').style.color = 'black';
  document.getElementById('contact-click').style.color = 'blue';
});