
var slideIndex = 1;
var item = "item"
var hitem = "hitem"
showSlides(slideIndex, item);
showSlides(slideIndex, hitem);


function plusSlide(m) {
    showSlides(slideIndex += 1,m);
}


function minusSlide(m) {
    showSlides(slideIndex -= 1, m);
}

function showSlides(n, m) {
    var i;
    var slides = document.getElementsByClassName(m);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
