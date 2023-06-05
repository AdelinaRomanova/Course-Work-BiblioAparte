
const carosel = document.querySelector(".list_books"),
arrowLeft = document.querySelector("#left");
arrowR = document.querySelector("#right");
const carosel_1 = document.querySelector(".two"),
arrowLeft_1 = document.querySelector("#left_1");
arrowR_1 = document.querySelector("#right_1");

let isDragStart = false, prevPageX, prevScrollLeft;

// arrowLeft.addEventListener("click", () => {
//     carosel.scrollLeft += -280;
// })

arrowR.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft += 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft += 340;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft += 430;
    }
})

arrowR_1.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_1.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_1.scrollLeft += 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_1.scrollLeft += 340;
    }
    if ( window.innerWidth < 715) {
        carosel_1.scrollLeft += 430;
    }
})

arrowLeft.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft -= 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft -= 340;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft -= 430;
    }
})

arrowLeft_1.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_1.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_1.scrollLeft -= 400;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_1.scrollLeft -= 340;
    }
    if ( window.innerWidth < 715) {
        carosel_1.scrollLeft -= 430;
    }
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carosel.scrollLeft;
    prevScrollLeft = carosel_1.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carosel.scrollLeft = prevScrollLeft - positionDiff;
    carosel_1.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carosel.addEventListener("mousedown", dragStart)
carosel.addEventListener("mousemove", dragging)
carosel.addEventListener("mouseup", dragStop)

carosel_1.addEventListener("mousedown", dragStart)
carosel_1.addEventListener("mousemove", dragging)
carosel_1.addEventListener("mouseup", dragStop)