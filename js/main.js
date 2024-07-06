import { Games } from "./games.js";

let gggg = new Games();
console.log(gggg)



document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (event) {
      event.preventDefault();

      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active');
      }

      this.classList.add('active');
    });
  }
});


$(document).ready(function () {
  $(".loading").fadeOut(500, function () {
    $("body").css("overflow", "visible")
  });
});

let headerHeight = $("#test").outerHeight();

$(window).scroll(function () {
  if ($(window).scrollTop() > headerHeight) {
    $("nav").addClass("fixed-top");
  } else {
    $("nav").removeClass("fixed-top");
  }
});
