// Traer la libreria desde internet.
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const slider = () => {
  console.log("Slider funcionando");

  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 50, // valor por defecto

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1.5,
      slideShadows: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Controlar gap de las tarjetas laterales
    breakpoints: {
      320: { spaceBetween: 60 }, 
      600: { spaceBetween: 90 },
    },
  });
};

