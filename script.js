class Book {
  booky = { id: new Date().getTime() };

  constructor(title, author, isbn = this.booky.id) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}