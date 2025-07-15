export {updateStyles, updateColors, updateMaterials, updateFurniture, updateResumen};

import { templateSteps } from './data/moodboardData.js';
import { slider } from './slider.js';


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
  containerMiddle.innerHTML = `
  <p>Colores</p>
  `
}



const updateMaterials = () => {
  containerMiddle.innerHTML = `
  <p>Materiales</p>
  `
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

