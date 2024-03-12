//toggling javascript function for bookmark
//identifying all element of same class by class query selector
let bookmarkContainer = document.querySelectorAll('.col-2.bookmark-toggler');
let solidBookmark = document.querySelectorAll('.fa-solid.fa-bookmark');
let regularBookmark = document.querySelectorAll('.fa-regular.fa-bookmark');

//function upon clicking of regular bookmark
//it goes through the array of elements of same class and 
//use the index to use the array item of same index to start function
document.querySelectorAll('.fa-regular.fa-bookmark').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...regularBookmark].indexOf(e.target);
        solidBookmark[indexOfClickedBtn-1].classList.toggle("show");
        regularBookmark[indexOfClickedBtn].classList.toggle("hide");
    })
});

//function upon clicking of solid bookmark
//going through the array of elements of same class and 
//use the index to use array item of same index to start function
document.querySelectorAll('.fa-solid.fa-bookmark').forEach(function (i) {
    i.addEventListener('click', function (e) {
        const indexOfClickedBtn = [...solidBookmark].indexOf(e.target);
        solidBookmark[indexOfClickedBtn].classList.remove("show");
        regularBookmark[indexOfClickedBtn+1].classList.remove("hide");
    })
});



//back to top button javascript function
//identify button
let backTopBtn = document.getElementById("back-top");

// function to show the button when user scrolls 30px downwards
window.onscroll = function () {
  scrollFunction();
};

// scrollTop for old browsers and documentElement.scrollTop for newer browsers
function scrollFunction() {
  if (
    document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
backTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}