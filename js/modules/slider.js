// Traer la libreria desde internet.
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const slider = () => {



  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow", // Activa el efecto tipo carrusel en 3D donde las tarjetas laterales se ven inclinadas o desplazadas al fondo.
    grabCursor: true, // Muestra un cursor tipo "manita" (👆) cuando pasas el mouse, indicando que puedes arrastrar.
    centeredSlides: true, // El slide activo queda centrado en lugar de alineado a la izquierda. Esto es importante para el efecto coverflow.
    slidesPerView: "auto", // Deja que cada slide tenga su propio ancho, no uno fijo. Es útil si tus tarjetas tienen diferentes tamaños
    loop: false, // Activa el loop infinito: al llegar al último slide, vuelve al primero sin cortes.
    spaceBetween: 50, // Define el espacio entre slides (tarjetas). Aquí el valor por defecto es 50px,
    initialSlide: 1,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },

    pagination: { //Activa los puntos de paginación (.swiper-pagination) debajo del carrusel. Al hacer clic en uno, se va al slide correspondiente.
      el: ".swiper-pagination",
      clickable: true,
    },

    // Controlar gap de las tarjetas laterales
    breakpoints: {
      320: { spaceBetween: 50 }, 
      509: { spaceBetween: 70 }, 
      600: { spaceBetween: 90 },
    },
  });



};

