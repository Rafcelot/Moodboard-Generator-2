export {updateIntro, updateStyles, updateColors, updateMaterials, updateFurniture, updateResumen};

import { templateResumen, templateSteps } from './data/moodboardData.js';
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
  const { style, colors, materials, furniture } = userSelection
  containerMiddle.innerHTML = templateSteps.resumen;

  const resumenStyle = document.getElementById('resumen-style')
  const resumenColors = document.getElementById('resumen-colors')
  const resumenMaterials = document.getElementById('resumen-materials')
  const resumenFurniture = document.getElementById('resumen-furniture')


  const imgStyle = templateResumen.imgResumenStyle[style]
  const imgColors = templateResumen.imgResumenColors[colors]
  const imgMaterials = templateResumen.imgResumenMaterials[materials]
  const imgFurniture = templateResumen.imgResumenFurniture[furniture]

  resumenStyle.style.backgroundImage = imgStyle
  resumenColors.style.backgroundImage = imgColors
  resumenMaterials.style.backgroundImage = imgMaterials
  resumenFurniture.style.backgroundImage = imgFurniture
}

