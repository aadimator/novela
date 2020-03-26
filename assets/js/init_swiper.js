var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

$(document).ready(function() {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true
  });
});
