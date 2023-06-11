
const carosel = document.querySelector(".list_books"),
arrowLeft = document.querySelector("#left");
arrowR = document.querySelector("#right");

const carosel_1 = document.querySelector(".two"),
arrowLeft_1 = document.querySelector("#left_1");
arrowR_1 = document.querySelector("#right_1");

const carosel_2 = document.querySelector(".three"),
arrowLeft_2 = document.querySelector("#left_2");
arrowR_2 = document.querySelector("#right_2");

const carosel_3 = document.querySelector(".four"),
arrowLeft_3 = document.querySelector("#left_3");
arrowR_3 = document.querySelector("#right_3");

let isDragStart = false, prevPageX, prevScrollLeft;

arrowLeft.addEventListener("click", () => {
    carosel.scrollLeft += -280;
})

arrowR.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft += 275;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft += 275;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft += 279;
    }
})

arrowR_1.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_1.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_1.scrollLeft += 275;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_1.scrollLeft += 275;
    }
    if ( window.innerWidth < 715) {
        carosel_1.scrollLeft += 279;
    }
})

arrowR_2.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_2.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_2.scrollLeft += 275;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_2.scrollLeft += 275;
    }
    if ( window.innerWidth < 715) {
        carosel_2.scrollLeft += 279;
    }
})

arrowR_3.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_3.scrollLeft += 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_3.scrollLeft += 275;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_3.scrollLeft += 275;
    }
    if ( window.innerWidth < 715) {
        carosel_3.scrollLeft += 279;
    }
})

arrowLeft.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel.scrollLeft -= 280;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel.scrollLeft -= 280;
    }
    if ( window.innerWidth < 715) {
        carosel.scrollLeft -= 280;
    }
})


arrowLeft_1.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_1.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_1.scrollLeft -= 280;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_1.scrollLeft -= 280;
    }
    if ( window.innerWidth < 715) {
        carosel_1.scrollLeft -= 280;
    }
})

arrowLeft_2.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_2.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_2.scrollLeft -= 280;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_2.scrollLeft -= 280;
    }
    if ( window.innerWidth < 715) {
        carosel_2.scrollLeft -= 280;
    }
})

arrowLeft_3.addEventListener("click", () => {
    if ( window.innerWidth > 1105) {
        carosel_3.scrollLeft -= 280;
    }
    if ( window.innerWidth < 1105 && window.innerWidth > 890) {
        carosel_3.scrollLeft -= 280;
    }
    if ( window.innerWidth < 890 && window.innerWidth > 715) {
        carosel_3.scrollLeft -= 280;
    }
    if ( window.innerWidth < 715) {
        carosel_3.scrollLeft -= 280;
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
    carosel_2.scrollLeft = prevScrollLeft - positionDiff;
    carosel_3.scrollLeft = prevScrollLeft - positionDiff;
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

carosel_2.addEventListener("mousedown", dragStart)
carosel_2.addEventListener("mousemove", dragging)
carosel_2.addEventListener("mouseup", dragStop)

carosel_3.addEventListener("mousedown", dragStart)
carosel_3.addEventListener("mousemove", dragging)
carosel_3.addEventListener("mouseup", dragStop)