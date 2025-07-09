

    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 50, // 👈 separa los slides con 30px
      coverflowEffect: {
        rotate: 0,        // sin rotación lateral
        stretch: 0,       // sin estiramiento
        depth: 150,       // profundidad 3D
        modifier: 1.5,    // intensidad del efecto
        slideShadows: false // sombras desactivadas
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
