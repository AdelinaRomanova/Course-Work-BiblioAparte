// Получаем значение полей
const nickname = document.getElementById('nickname');
const date = document.getElementById('date');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const avatar = document.getElementById('avatar');

// Добавляем обработчик события для отправки формы
document.getElementById('registrForm').addEventListener('submit', (event) => {
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Флаги валидации
  let isValid = true;

  // Валидация поля "nickname"
  if (nickname.value.trim() === '') {
    displayError(nickname, 'Введите никнейм');
    isValid = false;
  } else {
  }

  // Валидация поля "date"
  if (date.value === '') {
    displayError(date, 'Введите дату рождения');
    isValid = false;
  } else {
  }

  // Валидация поля "email"
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(email.value)) {
    displayError(email, 'Неверный формат E-mail');
    isValid = false;
  } else {
  }

  // Валидация поля "password"
  if (password.value.trim().length < 6) {
    displayError(password, 'Пароль должен быть не менее 6 символов');
    isValid = false;
  } else {
  }

  // Валидация поля "cpassword"
  if (cpassword.value !== password.value) {
    displayError(cpassword, 'Пароли не совпадают');
    isValid = false;
  } else {
  }

  // Валидация поля "avatar"
  const imageSize = (avatar.files[0].size / 1024 / 1024).toFixed(2);
  if (avatar.value === '') {
    displayError(avatar, 'Выберите изображение');
    isValid = false;
  } else if (!['image/jpeg', 'image/jpg', 'image/png'].includes(avatar.files[0].type)) {
    displayError(avatar, 'Неверный формат изображения');
    isValid = false;
  } else if (imageSize > 400) {
    displayError(avatar, 'Размер изображения не должен превышать 2 Мб');
    isValid = false;
  } else {
  }

  // Если поля прошли валидацию, отправляем форму
  if (isValid) {
    displayOk()
    document.getElementById('registrForm').submit();
  }
});

// Функция для показа сообщения об ошибке
function displayError(input, message) {
    swal.fire({
      icon: 'error',
      title: 'Ой ой, ошибочка...',
      text: message
    });
}


function displayOk() {
    swal.fire({
      icon: 'success',
      title: 'Регистрация прошла успешно',
    });
}

// Функция для показа сообщения об ошибке
function displayError(input, message) {
    input.classList.add('error');
  
    swal.fire({
      icon: 'error',
      title: 'Ой ой, ошибочка...',
      text: message
    });
}

