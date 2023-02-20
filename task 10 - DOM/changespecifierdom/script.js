

var elementq = document.getElementsByClassName("headgg")[0];
elementq.style.backgroundColor = "red";

var element = document.getElementById("parag");
element.innerHTML="the paragraph is edited using getElementById";

var ele=document.getElementsByTagName("button")[0];
ele.style.backgroundColor="blue";

var elem=document.getElementsByName("headd");
var pa=document.getElementsByName("p1");
pa[0].innerText=elem[0].innerText+" - the heading is copied here using getElementsByName and innerText";
pa[0].style.fontSize="18px";
