var bookLinks = document.querySelectorAll('.list_book a');
  for (var i = 0; i < bookLinks.length; i++) {
    bookLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = this.getAttribute('href');
    });
  }