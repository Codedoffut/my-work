var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("java");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
} 

var indexValue = 1;
showImg(indexValue);
function bottomSlide(e) {
  showImg(indexValue +=e);
}
function thisSlide(e) {
  showImg(indexValue = e)
}
function showImg(e) {
  var a;
  var show = document.getElementsByClassName("joke");
  var shy = document.getElementsByClassName("dota");
  if (e > show.length) { indexValue=1}
  if (e < 1) {indexValue = show.length}
  for (a = 0; a < show.length; a++) {
    show[a].style.display= "none";
}
for (a = 0; a < shy.length; a++) {
    shy[a].className = shy[a].className.replace(" active", "");
  }
  show[indexValue-1].style.display = "flex";
  shy[indexValue-1].className += " active";
  }