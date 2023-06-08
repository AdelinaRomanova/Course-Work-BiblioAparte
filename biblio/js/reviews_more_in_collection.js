const reviews = document.querySelectorAll('.book_review');
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

const commets = document.querySelectorAll('.book_commet');
const button_com = document.querySelector('.show-more-com');

let countt = 2;

commets.forEach((com, index) => {
  if (index >= countt) {
    com.style.display = 'none';
  }
});

button_com.addEventListener('click', () => {
  countt += 2;

  commets.forEach((com, index) => {
    if (index < countt) {
      com.style.display = 'flex';
    }
  });

  if (countt >= revicommetsews.length) {
    button_com.style.display = 'none';
  }
});