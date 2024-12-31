// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

let SlideELs = document.querySelectorAll(".images-grid .image"),
    navigationLi = document.querySelectorAll(".navigation li"),
    Next = document.querySelector("#next"),
    Prev = document.querySelector("#prev")

let current = 0
const NextSlide= ()=>{
    if(current == SlideELs.length - 1){
        current = 0
        SlideELs[SlideELs.length - 1].classList.remove("active")
        SlideELs[current].classList.add("active")
    }
    else {
        SlideELs[current].classList.remove("active")
        SlideELs[current+1].classList.add("active")
        current++
    }   
    UpdateNavCurrent()
}



const PrevSlide= ()=>{
    if(current == 0){
        current = SlideELs.length - 1
        SlideELs[0].classList.remove("active")
        SlideELs[SlideELs.length - 1].classList.add("active")
    }
    else {
        SlideELs[current].classList.remove("active")
        SlideELs[current-1].classList.add("active")
        current--
    }
    UpdateNavCurrent()
}


const UpdateNavCurrent = ()=>{
    navigationLi.forEach(navli =>{
        navli.classList.remove("active")
    })
    navigationLi[current].classList.add("active")
}


let Timer = 2000 // 2000ms ==> 2s
setInterval(NextSlide,Timer)
Next.addEventListener("click" , NextSlide)
Prev.addEventListener("click" , PrevSlide)