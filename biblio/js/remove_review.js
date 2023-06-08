function setup() {
    var els = document.getElementsByClassName("remove");
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('div.review').remove();
        });
    }
}
setup();