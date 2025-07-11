export {updateStyles, updateMaterials};

import { templateSteps } from './data/moodboardData.js';
import { slider } from './slider.js';

/**
 * Update Styles
 */
const containerMiddle = document.getElementById('container-middle')

const updateStyles = () => {
  containerMiddle.innerHTML = templateSteps.colors
  
  slider()
  console.log("updateStyles")
}

const updateMaterials = () => {
  console.log("updateMaterials")
}