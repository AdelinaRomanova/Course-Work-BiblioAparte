// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Получаем данные из формы
//     const name = document.getElementById("text_review").value;
//     // Отправляем данные на сервер (здесь можно использовать AJAX)
//     window.location.href = "profile_review_full.html";
// });

function redirectToProfile() {
    event.preventDefault();
    const text = document.getElementById("text_review").value;
    // Отправляем данные на сервер (здесь можно использовать AJAX)
    window.location.href = "profile_review_full.html";
}