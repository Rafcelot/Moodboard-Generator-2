export {updateIntro, updateStyles, updateColors, updateMaterials, updateFurniture, updateResumen, updateMoodboard};

import { moodboardTemplates, templateResumen, templateSteps } from './data/moodboardData.js';
import { slider } from './slider.js';
import { userSelection } from './state.js';


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