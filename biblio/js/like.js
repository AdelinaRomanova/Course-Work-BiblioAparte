const hearts = document.querySelectorAll('.heart');

hearts.forEach(h => h.addEventListener('click', function () {
  h.classList.toggle('fill-color');
}))

// const heart = document.querySelector(".heart");

// heart.addEventListener('click', () => {
//     if(heart.classList.contains('fill-color')){
//         heart.classList.remove('fill-color');
//         heart.classList.add('none-color');
//     }else{
//         heart.classList.remove('none-color');
//         heart.classList.add('fill-color');
//     }
// })

