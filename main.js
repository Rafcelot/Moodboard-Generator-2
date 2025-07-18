/**
 * Su función principal es importar módulos y inicializar la aplicación.
 */


// import { initStepController } from './js/modules/stepController.js';
// initStepController()


// import { goToNextStep } from "./js/modules/stepController.js";
// goToNextStep()

import { slider } from "./js/modules/slider.js";
slider();


import { initStepController } from "./js/modules/stepController.js";
initStepController();

import { enableResumenReturnLogic } from './js/modules/resumenReturnHandler.js'; 
enableResumenReturnLogic();


  // document.querySelectorAll('.next').forEach(btn => {
  //   btn.addEventListener('click', goToNextStep)
  // })

  