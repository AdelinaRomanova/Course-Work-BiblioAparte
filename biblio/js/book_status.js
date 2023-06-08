const statusButtons = document.querySelectorAll('.status-buttons input[type="radio"]');

statusButtons.forEach(button => {
  button.addEventListener('change', () => {
    console.log(`Статус: ${button.value}`);
    // здесь можно добавить код для отправки статуса на сервер или другие действия
  });
});