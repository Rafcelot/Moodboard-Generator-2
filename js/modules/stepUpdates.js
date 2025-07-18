export {updateIntro, updateStyles, updateColors, updateMaterials, updateFurniture, updateResumen, updateMoodboard};

import { moodboardTemplates, templateResumen, templateSteps } from './data/moodboardData.js';
import { slider } from './slider.js';
import { getCurrentStep, setCurrentStep, userSelection } from './state.js';

import { showStep } from './stepController.js';

// LOGICA PARA CADA PASO.

/**
 * Update Styles
 */
const containerMiddle = document.getElementById('container-middle');

const updateIntro = () => {
  containerMiddle.innerHTML = templateSteps.intro
}

const updateStyles = () => {
  containerMiddle.innerHTML = templateSteps.styles
  slider() // hay que llamarlo para que funcione.
}

const updateColors = () => {
  // Necesito desarrollar la logica dependiendo de lo que se escogio.
  const template = templateSteps.colors[userSelection.style]

  if(template) {
    containerMiddle.innerHTML = template
    slider()
  }
}



const updateMaterials = () => {
 const template = templateSteps.materials[userSelection.style]

 if(template) {
  containerMiddle.innerHTML = template
  slider()
 }
}


const updateFurniture = () => {
  const template = templateSteps.furniture[userSelection.style]

  if(template) {
    containerMiddle.innerHTML = template
    slider()
  }
  
}

const updateResumen = () => {
  const { style, colors, materials, furniture } = userSelection;
  containerMiddle.innerHTML = templateSteps.resumen;

  const sections = [
    { id: 'resumen-style',     key: style,     map: templateResumen.imgResumenStyle },
    { id: 'resumen-colors',    key: colors,    map: templateResumen.imgResumenColors },
    { id: 'resumen-materials', key: materials, map: templateResumen.imgResumenMaterials },
    { id: 'resumen-furniture', key: furniture, map: templateResumen.imgResumenFurniture }
  ];

  sections.forEach(({ id, key, map }) => {
    const element = document.getElementById(id);
    const imageUrl = map[key];
    if (element && imageUrl) {
      element.style.backgroundImage = imageUrl;
    }
  });

 


  // let cameFromResumen = false;

  // document.addEventListener('click', (e) => {
  //   const cardSelection = e.target.closest('.card-style')
  //   const cardValue = e.target.closest('[data-value]')


  //   if(cardSelection) {
  //     const selectCardResumen = cardSelection.dataset.type;

  //     const stepMap = {
  //       style: 1,
  //       colors: 2,
  //       materials: 3,
  //       furniture: 4,
  //     }

  //     const updateStep = stepMap[selectCardResumen]
  //     if(updateStep !== undefined) {
  //       cameFromResumen = true
  //       setCurrentStep(updateStep)
  //       showStep()
  //     }
  //   }

  //   if(cardSelection && cameFromResumen) {
  //     const value = cardValue.getAttribute('data-value')
  //     if (!value) return;

  //     const stepKeys = {
  //       1: "style",
  //       2: "colors",
  //       3: "materials",
  //       4: "furniture",
  //     }

  //     const key = stepKeys[getCurrentStep()]
  //     userSelection[key] = value

  //     cameFromResumen = false;
  //     setCurrentStep(5)
  //     showStep()

  //   }
  // })

  // const resumenStyle = document.getElementById('resumen-style');
  // const resumenColors = document.getElementById('resumen-colors');
  // const resumenMaterials = document.getElementById('resumen-materials');
  // const resumenFurniture = document.getElementById('resumen-furniture');

  // if (resumenStyle) {
  //   resumenStyle.addEventListener('click', () => {
  //     cameFromResumen = true
  //     setCurrentStep(1);
  //     showStep();
  //   })
  // }

  // if (resumenColors) {
  //   resumenColors.addEventListener('click', () => {
  //     cameFromResumen = true
  //     setCurrentStep(2)
  //     showStep()
  //   })
  // }

  // // ESCUCHAR EL NUEVO LLAMADO

  // // CONDICION PARA SABER SI VENGO DEL RESUMEN 
  // document.addEventListener('click', (e) => {
  //   console.log("58")


  //   const card = e.target.closest('.card')
  //   console.log(cameFromResumen)
  //   if(cameFromResumen) {
  //     cameFromResumen = false
  //     setCurrentStep(5)
  //     showStep()
  //   }


  // })

};


const updateMoodboard = () => {
  const template = templateSteps.moodboard

  const { style, colors, materials, furniture } = userSelection;
  containerMiddle.innerHTML = templateSteps.moodboard;
  
  // Estilos
  const styleUrl = moodboardTemplates.style?.[style]
  const styleBox = document.getElementById('moodboard-styles')

  if (styleBox && styleUrl) {
    styleBox.style.backgroundImage = styleUrl
  }


  // Colores 
  const colorsArray = moodboardTemplates.colors?.[style]?.[colors];
  
  if (colorsArray && colorsArray.length) { // Un arreglo vacio es truthy por lo cual se usa la segunda condición
    colorsArray.forEach((color,index) => {
      const colorBox = document.getElementById(`color-${index}`); // bello // Selecciono el id en secuencia según el index.
      if (colorBox) {
        colorBox.style.backgroundColor = color; // Al final lo imprimo.
      }
    })
  }

  // Materiales
  const materialUrl = moodboardTemplates.materials?.[style]?.[materials]
  const materialsBox = document.getElementById('materials');
  if (materialsBox && materialUrl) {
    materialsBox.style.backgroundImage = materialUrl
  }

  // Mobiliario
  const furnitureUrl = moodboardTemplates.furniture?.[style]?.[furniture]
  const furnitureBox = document.getElementById('furniture')
  console.log(furnitureUrl)
  if(furnitureBox && furnitureUrl) {
    furnitureBox.style.backgroundImage = furnitureUrl
  }
 

}