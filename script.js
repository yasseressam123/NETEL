//navbar links

const navbar = document.querySelector(".navbar");
      a= navbar.querySelectorAll("a");

      a.forEach(element => {
          element.addEventListener("click",function(){
              for(let i=0; i<a.length; i++){
                  a[i].classList.remove("active");
              }
              this.classList.add("active")
              document.querySelector(".navbar").classList.toggle("show");
          })
      });

// --------------------------------> silider

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}