/**
 * Templates
 */

export const templateSteps = {
  intro: `
  <div class="img-intro"></div>
  `,
  styles: `
    <div class="container__middle-square">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide card card-style card-style__img--s1" data-value="Estilo fresh"  data-type="style"></div>
          <div class="swiper-slide card card-style card-style__img--s2" data-value="Estilo tropical"  data-type="style"></div>
          <div class="swiper-slide card card-style card-style__img--s3" data-value="Estilo industrial"  data-type="style"></div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>  
  `,

  colors: {
    'Estilo fresh': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-colors__img-fresh-f1" data-value="fresh-color-1" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f2" data-value="fresh-color-2" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f3" data-value="fresh-color-3" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f4" data-value="fresh-color-4" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f6" data-value="fresh-color-5" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f5" data-value="fresh-color-6" data-type="colors"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-colors__img-industrial-i1" data-value="industrial-color-1" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i2" data-value="industrial-color-2" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i3" data-value="industrial-color-3" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i4" data-value="industrial-color-4" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i5" data-value="industrial-color-5" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i6" data-value="industrial-color-5" data-type="colors"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-colors__img-tropical-t1" data-value="tropical-color-1" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t2" data-value="tropical-color-2" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t3" data-value="tropical-color-3" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t4" data-value="tropical-color-4" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t5" data-value="tropical-color-5" data-type="colors"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t6" data-value="tropical-color-6" data-type="colors"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `
  },

  materials: {
    'Estilo fresh': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-materials__img-fresh-f1" data-value="fresh-materials-1" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-fresh-f2" data-value="fresh-materials-2" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-fresh-f3" data-value="fresh-materials-3" data-type="materials"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-materials__img-industrial-i1" data-value="industrial-materials-1" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-industrial-i2" data-value="industrial-materials-2" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-industrial-i3" data-value="industrial-materials-3" data-type="materials"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-materials__img-tropical-t1" data-value="tropical-materials-1" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-tropical-t2" data-value="tropical-materials-2" data-type="materials"></div>
            <div class="swiper-slide card card-style card-materials__img-tropical-t3" data-value="tropical-materials-3" data-type="materials"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `
  },

  furniture: {
    'Estilo fresh': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-furniture__img-fresh-f1" data-value="fresh-furniture-1" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-fresh-f2" data-value="fresh-furniture-2" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-fresh-f3" data-value="fresh-furniture-3" data-type="furniture"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-furniture__img-industrial-i1" data-value="industrial-furniture-1" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-industrial-i2" data-value="industrial-furniture-2" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-industrial-i3" data-value="industrial-furniture-3" data-type="furniture"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-furniture__img-tropical-t1" data-value="tropical-furniture-1" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-tropical-t2" data-value="tropical-furniture-2" data-type="furniture"></div>
            <div class="swiper-slide card card-style card-furniture__img-tropical-t3" data-value="tropical-furniture-3" data-type="furniture"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `
  },
  resumen: `
    <div class="resumen">
      <div class="card-resumen card-style resumen__card-estilos" id="resumen-style" data-type="style"></div>
      <div class="card-resumen card-style resumen__card-colores" id="resumen-colors" data-type="colors"></div>
      <div class="card-resumen card-style resumen__card-materiales" id="resumen-materials" data-type="materials"></div>
      <div class="card-resumen card-style resumen__card-mobiliario" id="resumen-furniture" data-type="furniture"></div>
    </div>
  `,
  moodboard: `
    <div class="moodboard" id="moodboard">
      <div class="moodboard__color-0" id="color-0"></div>
      <div class="moodboard__color-1 "id="color-1">
        <div class="moodboard__styles" id="moodboard-styles"></div>    
      </div>
      <div class="moodboard__color-2" id="color-2"></div>
      <div class="moodboard__color-3" id="color-3"></div>

      <div class="moodboard__furniture" id="furniture"></div> 
      <div class="moodboard__material" id="materials"></div>
    </div>  
  `
};



export const stepTexts = {
  0: {
    title: 'Diseña tu MoodBoard',
    subtitle: 'Combina muebles, materiales y  colores.'
  },
  1: {
    title: 'Estilos',
    subtitle: 'Elige un estilo que refleje tu marca.'
  },
  2: {
    title: 'Colores',
    subtitle: 'Elige la atmósfera a través del color.'
  },
  3: {
    title: 'Materiales',
    subtitle: 'Elige materiales que expresan tu estilo.'
  },
  4: {
    title: 'Mobiliario',
    subtitle: 'Elige piezas que complementen tu estilo.'
  },
  5: {
    title: 'Resumen',
    subtitle: 'Verifica y crea tu moodboard'
  },
  6: {
    title: "Moodboard",
    subtitle: "Tu moodboard está listo."
  }
}


export const templateResumen = {
  imgResumenStyle: {
    "Estilo fresh": "url('../assets/images/styles/fresh-style.png')",
    "Estilo tropical": "url('../assets/images/styles/tropical-style.png')",
    "Estilo industrial": "url('../assets/images/styles/industrial-style.png')"
  },
  imgResumenColors: {
    "fresh-color-1": "url('../assets/images/colors/fresh-colors-1.png')",
    "fresh-color-2": "url('../assets/images/colors/fresh-colors-2.png')",
    "fresh-color-3": "url('../assets/images/colors/fresh-colors-3.png')",
    "fresh-color-4": "url('../assets/images/colors/fresh-colors-4.png')",
    "fresh-color-5": "url('../assets/images/colors/fresh-colors-5.png')",

    "industrial-color-1": "url('../assets/images/colors/industrial-colors-1.png')",
    "industrial-color-2": "url('../assets/images/colors/industrial-colors-2.png')",
    "industrial-color-3": "url('../assets/images/colors/industrial-colors-3.png')",
    "industrial-color-4": "url('../assets/images/colors/industrial-colors-4.png')",
    "industrial-color-5": "url('../assets/images/colors/industrial-colors-5.png')",
    "industrial-color-6": "url('../assets/images/colors/industrial-colors-6.png')",

    "tropical-color-1": "url('../assets/images/colors/tropical-colors-1.png')",
    "tropical-color-2": "url('../assets/images/colors/tropical-colors-2.png')",
    "tropical-color-3": "url('../assets/images/colors/tropical-colors-3.png')",
    "tropical-color-4": "url('../assets/images/colors/tropical-colors-4.png')",
    "tropical-color-5": "url('../assets/images/colors/tropical-colors-5.png')",
    "tropical-color-6": "url('../assets/images/colors/tropical-colors-6.png')",    
  },
  imgResumenMaterials: {
    "fresh-materials-1": "url('../assets/images/materials/fresh-materials-1.png')",
    "fresh-materials-2": "url('../assets/images/materials/fresh-materials-2.png')",
    "fresh-materials-3": "url('../assets/images/materials/fresh-materials-3.png')",
    "fresh-materials-4": "url('../assets/images/materials/fresh-materials-4.png')",
    "fresh-materials-5": "url('../assets/images/materials/fresh-materials-5.png')",
    "fresh-materials-6": "url('../assets/images/materials/fresh-materials-6.png')",

    "industrial-materials-1": "url('../assets/images/materials/industrial-materials-1.png')",
    "industrial-materials-2": "url('../assets/images/materials/industrial-materials-2.png')",
    "industrial-materials-3": "url('../assets/images/materials/industrial-materials-3.png')",
    "industrial-materials-4": "url('../assets/images/materials/industrial-materials-4.png')",
    "industrial-materials-5": "url('../assets/images/materials/industrial-materials-5.png')",
    "industrial-materials-6": "url('../assets/images/materials/industrial-materials-6.png')",

    "tropical-materials-1": " url('../assets/images/materials/tropical-materials-1.png')",
    "tropical-materials-2": " url('../assets/images/materials/tropical-materials-2.png')",
    "tropical-materials-3": " url('../assets/images/materials/tropical-materials-3.png')",
    "tropical-materials-4": " url('../assets/images/materials/tropical-materials-4.png')",
    "tropical-materials-5": " url('../assets/images/materials/tropical-materials-5.png')",
    "tropical-materials-6": " url('../assets/images/materials/tropical-materials-6.png')",
  },
  imgResumenFurniture: {
    "fresh-furniture-1": "url('../assets/images/furniture/fresh-furniture-1.png')",
    "fresh-furniture-2": "url('../assets/images/furniture/fresh-furniture-2.png')",
    "fresh-furniture-3": "url('../assets/images/furniture/fresh-furniture-3.png')",
    "fresh-furniture-4": "url('../assets/images/furniture/fresh-furniture-4.png')",
    "fresh-furniture-5": "url('../assets/images/furniture/fresh-furniture-5.png')",
    "fresh-furniture-6": "url('../assets/images/furniture/fresh-furniture-6.png')",

    "industrial-furniture-1": "url('../assets/images/furniture/industrial-furniture-1.png')",
    "industrial-furniture-2": "url('../assets/images/furniture/industrial-furniture-2.png')",
    "industrial-furniture-3": "url('../assets/images/furniture/industrial-furniture-3.png')",
    "industrial-furniture-4": "url('../assets/images/furniture/industrial-furniture-4.png')",
    "industrial-furniture-5": "url('../assets/images/furniture/industrial-furniture-5.png')",
    "industrial-furniture-6": "url('../assets/images/furniture/industrial-furniture-6.png')",

    "tropical-furniture-1": "url('../assets/images/furniture/tropical-furniture-1.png')",
    "tropical-furniture-2": "url('../assets/images/furniture/tropical-furniture-2.png')",
    "tropical-furniture-3": "url('../assets/images/furniture/tropical-furniture-3.png')",
    "tropical-furniture-4": "url('../assets/images/furniture/tropical-furniture-4.png')",
    "tropical-furniture-5": "url('../assets/images/furniture/tropical-furniture-5.png')",
    "tropical-furniture-6": "url('../assets/images/furniture/tropical-furniture-6.png')",
  }
}


export const moodboardTemplates = {
  style: {
    "Estilo fresh": "url('../assets/images/moodboard/moodboard-fresh-styles.webp')",  
    "Estilo industrial": "url('../assets/images/moodboard/moodboard-industrial-styles.webp')",  
    "Estilo tropical": "url('../assets/images/moodboard/moodboard-tropical-styles.webp')",  
  },
  colors: {
    "Estilo fresh": {
      "fresh-color-1": ["rgba(239, 208, 3, 1)",   "rgba(119, 143, 91, 1)",   "rgba(250, 230, 37, 1)",   "rgba(57, 78, 45, 1)"],
      "fresh-color-2": ["rgba(67, 148, 149, 1)",  "rgba(233, 51, 102, 1)",   "rgba(242, 165, 183, 1)",  "rgba(156, 198, 196, 1)"],
      "fresh-color-3": ["rgba(14, 157, 165, 1)",  "rgba(255, 115, 17, 1)",   "rgba(252, 187, 21, 1)",   "rgba(239, 235, 236, 1)"],
      "fresh-color-4": ["rgba(247, 87, 9, 1)",    "rgba(47, 113, 25, 1)",    "rgba(252, 233, 131, 1)",  "rgba(228, 250, 248, 1)"],
      "fresh-color-5": ["rgba(18, 57, 2, 1)",     "rgba(73, 141, 2, 1)",     "rgba(111, 218, 0, 1)",    "rgba(205, 249, 200, 1)"],
      "fresh-color-6": ["rgba(215, 177, 44, 1)",  "rgba(4, 122, 192, 1)",    "rgba(4, 53, 111, 1)",     "rgba(12, 188, 229, 1)"]
    },
    "Estilo industrial": {
      "industrial-color-1": ["rgba(225, 200, 170, 1)", "rgba(39, 46, 56, 1)",   "rgba(139, 62, 27, 1)",    "rgba(99, 38, 20, 1)"],
      "industrial-color-2": ["rgba(109, 64, 31, 1)",   "rgba(44, 62, 38, 1)",   "rgba(94, 100, 96, 1)",    "rgba(202, 96, 59, 1)"],
      "industrial-color-3": ["rgba(226, 165, 58, 1)",  "rgba(148, 18, 26, 1)",  "rgba(33, 42, 47, 1)",     "rgba(67, 75, 78, 1)"],
      "industrial-color-4": ["rgba(197, 188, 189, 1)", "rgba(26, 27, 32, 1)",   "rgba(162, 91, 59, 1)",    "rgba(47, 64, 84, 1)"],
      "industrial-color-5": ["rgba(142, 71, 43, 1)",   "rgba(29, 111, 99, 1)",  "rgba(95, 91, 80, 1)",     "rgba(43, 36, 30, 1)"],
      "industrial-color-6": ["rgba(196, 131, 89, 1)",  "rgba(38, 42, 41, 1)",   "rgba(57, 66, 61, 1)",     "rgba(137, 131, 119, 1)"]
    },
    "Estilo tropical": {
      "tropical-color-1": ["rgba(252, 223, 44, 1)", "rgba(138, 124, 49, 1)",   "rgba(183, 138, 47, 1)",   "rgba(197, 110, 33, 1)"],
      "tropical-color-2": ["rgba(206, 174, 91, 1)", "rgba(163, 92, 4, 1)",     "rgba(152, 164, 40, 1)",   "rgba(31, 34, 15, 1)"],
      "tropical-color-3": ["rgba(202, 195, 189, 1)","rgba(129, 22, 14, 1)",    "rgba(189, 58, 40, 1)",    "rgba(42, 74, 27, 1)"],
      "tropical-color-4": ["rgba(176, 120, 85, 1)", "rgba(6, 99, 117, 1)",     "rgba(4, 137, 154, 1)",    "rgba(16, 188, 188, 1)"],
      "tropical-color-5": ["rgba(241, 241, 231, 1)","rgba(199, 59, 6, 1)",     "rgba(245, 142, 50, 1)",   "rgba(75, 68, 13, 1)"],
      "tropical-color-6": ["rgba(220, 201, 168, 1)","rgba(131, 183, 109, 1)",  "rgba(244, 108, 34, 1)",   "rgba(28, 74, 10, 1)"]
    }
  },
  materials: {
    "Estilo fresh": {
      "fresh-materials-1":     "url('../assets/images/moodboard/moodboard-fresh-materials-1.webp')",
      "fresh-materials-2":     "url('../assets/images/moodboard/moodboard-fresh-materials-2.webp')",
      "fresh-materials-3":     "url('../assets/images/moodboard/moodboard-fresh-materials-3.webp')"
    },
    "Estilo industrial": {
      "industrial-materials-1": "url('../assets/images/moodboard/moodboard-industrial-materials-1.webp')",
      "industrial-materials-2": "url('../assets/images/moodboard/moodboard-industrial-materials-2.webp')",
      "industrial-materials-3": "url('../assets/images/moodboard/moodboard-industrial-materials-3.webp')"
    },
    "Estilo tropical": {
      "tropical-materials-1":  "url('../assets/images/moodboard/moodboard-tropical-materials-1.webp')",
      "tropical-materials-2":  "url('../assets/images/moodboard/moodboard-tropical-materials-2.webp')",
      "tropical-materials-3":  "url('../assets/images/moodboard/moodboard-tropical-materials-3.webp')"
    }
  },
  furniture: {
    "Estilo fresh": {
      "fresh-furniture-1":    "url('../assets/images/moodboard/moodboard-furniture-fresh-1.webp')",
      "fresh-furniture-2":    "url('../assets/images/moodboard/moodboard-furniture-fresh-2.webp')",
      "fresh-furniture-3":    "url('../assets/images/moodboard/moodboard-furniture-fresh-3.webp')"
    },
    "Estilo industrial": {
      "industrial-furniture-1": "url('../assets/images/moodboard/moodboard-furniture-industrial-1.webp')",
      "industrial-furniture-2": "url('../assets/images/moodboard/moodboard-furniture-industrial-2.webp')",
      "industrial-furniture-3": "url('../assets/images/moodboard/moodboard-furniture-industrial-3.webp')"
    },
    "Estilo tropical": {
      "tropical-furniture-1":  "url('../assets/images/moodboard/moodboard-furniture-tropical-1.webp')",
      "tropical-furniture-2":  "url('../assets/images/moodboard/moodboard-furniture-tropical-2.webp')",
      "tropical-furniture-3":  "url('../assets/images/moodboard/moodboard-furniture-tropical-3.webp')"
    }
  },
};
