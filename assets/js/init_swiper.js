var mySwiper = new Swiper(".swiper1", {
  slidesPerView: 1.1,
  centeredSlides: false,
  grabCursor: true,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper1-pagination",
    clickable: true
  }
});

var certSwiper = new Swiper(".swiper2", {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper2-pagination",
    clickable: true
  }
});
