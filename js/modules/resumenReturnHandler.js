// modules/resumenReturnHandler.js


import { getCurrentStep, setCurrentStep, userSelection } from './state.js';
import { showStep } from './stepController.js';
import { updateResumen } from './stepUpdates.js';

let cameFromResumen = false;

export const enableResumenReturnLogic = (formCounter) => {
  document.addEventListener('click', (e) => {
    console.log("hjopta")
    const resumenCard = e.target.closest('.card-style');
    const card = e.target.closest('.card');

    // 👈 Paso 5: clic sobre tarjeta del resumen
    if (getCurrentStep() === 5 && resumenCard) {
      const type = resumenCard.dataset.type;

      const stepMap = {
        style: 1,
        colors: 2,
        materials: 3,
        furniture: 4
      };

      const newStep = stepMap[type];
      if (newStep !== undefined) {
        cameFromResumen = true;
        setCurrentStep(newStep);
        showStep();
      }
    }

    // 👉 Pasos 1 a 4: se hace clic en una tarjeta
    if (getCurrentStep() !== 5 && card) {
      const value = card.getAttribute('data-value');
      if (!value) return;

      const stepKeys = {
        1: "style",
        2: "colors",
        3: "materials",
        4: "furniture"
      };

      const key = stepKeys[getCurrentStep()];
      userSelection[key] = value;

      if (cameFromResumen) {
        console.log("noooooooooooo")
        console.log("naaaa", userSelection)
        setCurrentStep(5);
        showStep();
        updateResumen();
        cameFromResumen = false;
      }
    }
  });
}


  // export const enableResumenReturnLogic = () => {
  //   let cameFromResumen = false;

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
  //     updateResumen()
  //   }
  // })


    
  // }
  