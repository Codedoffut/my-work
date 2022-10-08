var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function mySlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("point");
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


var slideIndex = 1;

displaySlides(slideIndex);

function plusSlides(n) {
  displaySlides(slideIndex += n);
}

function ourSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("ourSlides");
  var dots = document.getElementsByClassName("points");
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



// var imageSlider = 1
// showThis(imageSlider);
// function addSlides(b) {
//     showThis(imageSlider += b);
// }
// function mySlide(b) {
//     showThis(imageSlider = b);
// }
// function showThis(b) {
//    var c;
//    var mine= document.getElementsByClassName("mySlides") 
//    var ours= document.getElementsByClassName("point")
//    if (b > mine.length) {imageSlider = 1}    
//   if (b < 1) {imageSlider = mine.length}
//   for (c = 0; i < mine.length; c++) {
//       mine[c].style.display = "none";  
//   }
//   for (c = 0; i < ours.length; c++) {
//       ours[c].className = ours[c].className.replace(" active", "");
//   }
//   mine[imageSlider-1].style.display = "flex";  
//   ours[imageSlider-1].className += " active";
// }