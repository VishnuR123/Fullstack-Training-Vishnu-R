function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  let slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  var row = document.getElementsByClassName("row");
  var row11=document.getElementById("row11");
  var row12=document.getElementById("row12");
  var row21=document.getElementById("row21");
  var row22=document.getElementById("row22");
for(var i = 0; i < row.length-1; i++) {
  row[0].addEventListener("mouseover", function() {
      row11.classList.remove('animateleave');
      row11.classList.add('animate');
      row12.classList.remove('animate2leave');
      row12.classList.add('animate2');
  });
  row[0].addEventListener("mouseleave", function(){
    row11.classList.remove('animate');
   row11.classList.add('animateleave');
   row12.classList.remove('animate2');
   row12.classList.add('animate2leave');
  });
  row[2].addEventListener("mouseover", function() {
      row31.classList.remove('animateleave');
      row31.classList.add('animate');
      row32.classList.remove('animate2leave');
      row32.classList.add('animate2');
  });
  row[2].addEventListener("mouseleave", function(){
    row31.classList.remove('animate');
   row31.classList.add('animateleave');
   row32.classList.remove('animate2');
   row32.classList.add('animate2leave');
  });
  row[1].addEventListener("mouseover", function() {
    row22.classList.remove('animateleaveb');
    row22.classList.add('animateb');
    row21.classList.remove('animate2leaveb');
    row21.classList.add('animate2b');
  });
  row[1].addEventListener("mouseleave", function(){
    row22.classList.remove('animateb');
    row22.classList.add('animateleaveb');
    row21.classList.remove('animate2b');
    row21.classList.add('animate2leaveb');
  });  
  row[3].addEventListener("mouseover", function() {
    row42.classList.remove('animateleaveb');
    row42.classList.add('animateb');
    row41.classList.remove('animate2leaveb');
    row41.classList.add('animate2b');
  });
  row[3].addEventListener("mouseleave", function(){
    row42.classList.remove('animateb');
    row42.classList.add('animateleaveb');
    row41.classList.remove('animate2b');
    row41.classList.add('animate2leaveb');
  });  
}

