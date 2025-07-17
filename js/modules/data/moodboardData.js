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
          <div class="swiper-slide card card-style card-style__img--s1" data-value="Estilo fresh"></div>
          <div class="swiper-slide card card-style card-style__img--s2" data-value="Estilo tropical"></div>
          <div class="swiper-slide card card-style card-style__img--s3" data-value="Estilo industrial"></div>
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
            <div class="swiper-slide card card-style card-colors__img-fresh-f1" data-value="fresh-color-1"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f2" data-value="fresh-color-2"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f3" data-value="fresh-color-3"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f4" data-value="fresh-color-4"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f6" data-value="fresh-color-5"></div>
            <div class="swiper-slide card card-style card-colors__img-fresh-f5" data-value="fresh-color-6"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-colors__img-industrial-i1" data-value="industrial-color-1"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i2" data-value="industrial-color-2"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i3" data-value="industrial-color-3"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i4" data-value="industrial-color-4"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i5" data-value="industrial-color-5"></div>
            <div class="swiper-slide card card-style card-colors__img-industrial-i6" data-value="industrial-color-5"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-colors__img-tropical-t1" data-value="tropical-color-1"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t2" data-value="tropical-color-2"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t3" data-value="tropical-color-3"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t4" data-value="tropical-color-4"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t5" data-value="tropical-color-5"></div>
            <div class="swiper-slide card card-style card-colors__img-tropical-t6" data-value="tropical-color-6"></div>
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
            <div class="swiper-slide card card-style card-materials__img-fresh-f1" data-value="fresh-materials-1"></div>
            <div class="swiper-slide card card-style card-materials__img-fresh-f2" data-value="fresh-materials-2"></div>
            <div class="swiper-slide card card-style card-materials__img-fresh-f3" data-value="fresh-materials-3"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-materials__img-industrial-i1" data-value="industrial-materials-1"></div>
            <div class="swiper-slide card card-style card-materials__img-industrial-i2" data-value="industrial-materials-2"></div>
            <div class="swiper-slide card card-style card-materials__img-industrial-i3" data-value="industrial-materials-3"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-materials__img-tropical-t1" data-value="tropical-materials-1"></div>
            <div class="swiper-slide card card-style card-materials__img-tropical-t2" data-value="tropical-materials-2"></div>
            <div class="swiper-slide card card-style card-materials__img-tropical-t3" data-value="tropical-materials-3"></div>
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
            <div class="swiper-slide card card-style card-furniture__img-fresh-f1" data-value="fresh-furniture-1"></div>
            <div class="swiper-slide card card-style card-furniture__img-fresh-f2" data-value="fresh-furniture-2"></div>
            <div class="swiper-slide card card-style card-furniture__img-fresh-f3" data-value="fresh-furniture-3"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo industrial': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-furniture__img-industrial-i1" data-value="industrial-furniture-1"></div>
            <div class="swiper-slide card card-style card-furniture__img-industrial-i2" data-value="industrial-furniture-2"></div>
            <div class="swiper-slide card card-style card-furniture__img-industrial-i3" data-value="industrial-furniture-3"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `,

    'Estilo tropical': `
      <div class="container__middle-square">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide card card-style card-furniture__img-tropical-t1" data-value="tropical-furniture-1"></div>
            <div class="swiper-slide card card-style card-furniture__img-tropical-t2" data-value="tropical-furniture-2"></div>
            <div class="swiper-slide card card-style card-furniture__img-tropical-t3" data-value="tropical-furniture-3"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    `
  },
  resumen: `
    <div class="resumen">
      <div class="card-style resumen__card-estilos" id="resumen-style"></div>
      <div class="card-style resumen__card-colores" id="resumen-colors"></div>
      <div class="card-style resumen__card-materiales" id="resumen-materials"></div>
      <div class="card-style resumen__card-mobiliario" id="resumen-furniture"></div>
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