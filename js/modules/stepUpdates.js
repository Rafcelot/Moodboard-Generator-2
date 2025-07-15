export {updateStyles, updateColors, updateMaterials, updateFurniture, updateResumen};

import { templateSteps } from './data/moodboardData.js';
import { slider } from './slider.js';
import { userSelection } from './state.js';


// LOGICA PARA CADA PASO.

/**
 * Update Styles
 */
const containerMiddle = document.getElementById('container-middle')

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
  containerMiddle.innerHTML = `
  <p>Furniture</p>
  `
}

const updateResumen = () => {
  containerMiddle.innerHTML = `
  <p>Resumen</p>
  `
}

