const books = document.querySelectorAll('.list_book');
const button = document.querySelector('.show-more');

let count = 2;

books.forEach((book, index) => {
  if (index >= count) {
    book.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  count += 2;

  books.forEach((book, index) => {
    if (index < count) {
      book.style.display = 'flex';
    }
  });

  if (count >= books.length) {
    button.style.display = 'none';
  }
});