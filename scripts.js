
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 50, // valor por defecto (se puede omitir si ya usas breakpoints)
  
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 👇 Aquí van los breakpoints
  breakpoints: {
  320: { spaceBetween: 40 },
  600: { spaceBetween: 24 },
  900: { spaceBetween: 60 }
}
});
