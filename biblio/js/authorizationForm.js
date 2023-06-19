const form = document.querySelector('form'); 

document.getElementById('authorizationForm').addEventListener('submit', (event) => {
    // Отменяем стандартное поведение формы, чтобы страница не перезагружалась 
    event.preventDefault();
    // Находим поля email и password 
    const emailField = document.getElementById('email'); 
    const passwordField = document.getElementById('password');
    // Проверяем, соответствуют ли значения email и password заданным 
    if(emailField.value.trim() === 'email@yandex.ru' && passwordField.value.trim() === '111111') { 
        // Если соответствуют, переносим пользователя на страницу index.html 
        window.location.href = 'index.html'; } 
        else { 
            displayError(form, 'Неверный email или пароль'); 
        } 
    });
        
function displayError(input, message) { 
    swal.fire({ 
        icon: 'error', 
        title: 'Ой ой, ошибочка...', 
        text: message 
    }); }