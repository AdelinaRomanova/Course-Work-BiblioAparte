const reviews = document.querySelectorAll('.list_book');
const button = document.querySelector('.show-more');

let count = 4;

button.addEventListener('click', () => {
  count += 4;

  reviews.forEach((review, index) => {
    if (index < count) {
      review.style.display = 'flex';
    } else {
      review.style.display = 'none';
    }
  });

  if (count >= reviews.length) {
    button.style.display = 'none';
  }
});