const reviews = document.querySelectorAll('.review');
const button = document.querySelector('.show-more');

let count = 2;

reviews.forEach((review, index) => {
  if (index >= count) {
    review.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  count += 2;

  reviews.forEach((review, index) => {
    if (index < count) {
      review.style.display = 'flex';
    }
  });

  if (count >= reviews.length) {
    button.style.display = 'none';
  }
});