let slides = document.getElementsByClassName("slide")

let numSlide = slides.length

let slideSelected = 0

document.getElementById("next-img").addEventListener("click", function () {
    slides[slideSelected].classList.remove("active")

    if (slideSelected < numSlide - 1) {
        slideSelected++
    }
    else {
        slideSelected = 0
    }

    slides[slideSelected].classList.add("active")
})

document.getElementById("prev-img").addEventListener("click", function () {
    slides[slideSelected].classList.remove("active")

    if (slideSelected > 0) {
        slideSelected--
    }

    else {
        slideSelected = numSlide - 1
    }

    slides[slideSelected].classList.add("active")
})