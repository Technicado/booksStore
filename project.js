// Get the login form
     var lform = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == lform) {
        lform.style.display = "none";
      }
   }
// when click loginform
       function someFunc() {
       alert("Login Saved")
       lform.style.display = "none";
    }

    //get the excerpt form
        var excerpt = document.getElementById('id02');
    //excerpt form will close when clicked outside form
        window.onclick = function(event) {
        if (event.target == excerpt) {
        excerpt.style.display = "none";
        }
        }
 //collapse content
 function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none"){
 dots.style.display = "inline";
 btnText.innerHTML = "Read more";
 moreText.style.display = "none";
} else {
 dots.style.display = "none";
 btnText.innerHTML = "Read less";
 moreText.style.display = "inline";
}
}
//collapsable 2
function myFunctions() {
var dotss = document.getElementById("dotss");
var moreTexts = document.getElementById("smore");
var btnTexts = document.getElementById("myBtns");

if (dotss.style.display === "none"){
dotss.style.display = "inline";
btnTexts.innerHTML = "Read more";
moreTexts.style.display = "none";
} else {
dotss.style.display = "none";
btnTexts.innerHTML = "Read less";
moreTexts.style.display = "inline";
}
}

//get the subscribe form
    var subscribe = document.getElementById('id03');
//subscribe form will close when clicked outside form
    window.onclick = function(events) {
    if (events.target == subscribe) {
    subscribe.style.display = "none";
    }
    }

//slideshow on home page
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
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activ";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
 // feedback form
 //get the subscribe form
     var feedback = document.getElementById('id04');
 //subscribe form will close when clicked outside form
     window.onclick = function(users) {
     if (users.target == feedback) {
     feedback.style.display = "none";
     }
     }
