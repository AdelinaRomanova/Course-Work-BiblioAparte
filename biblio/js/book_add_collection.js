// Получаем кнопку "Добавить в коллекцию"
var addToCollectionBtn = document.getElementById("add-to-collection-btn");

// Получаем модальное окно
var modal = document.getElementById("collection-modal");

// Получаем элемент для закрытия модального окна
var closeBtn = document.getElementsByClassName("close")[0];

// При клике на кнопку "Добавить в коллекцию" показываем модальное окно
addToCollectionBtn.onclick = function() {
  modal.style.display = "block";
}

// При клике на элемент для закрытия модального окна скрываем его
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// При клике за пределами модального окна скрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Получаем список коллекций и добавляем обработчик клика на каждый элемент списка
var collectionList = document.getElementById("collection-list");
var collections = collectionList.getElementsByTagName("li");
for (var i = 0; i < collections.length; i++) {
  collections[i].onclick = function() {
    // Добавляем выбранную книгу в коллекцию
    // ...
    // После добавления книги в коллекцию скрываем модальное окно
    modal.style.display = "none";
}
}