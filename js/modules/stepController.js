import { updateMaterials, updateStyles } from './stepUpdates.js';

// Estado 
import { getCurrentStep, setCurrentStep } from './state.js';

// User selection 
import { userSelection } from './state.js';

// Contador de pasos
import { showStepCounter } from './stepCounter.js';



// Mostrar paso
const stepHandlers = {
  // 0: updateIntroduction,
  1: updateStyles,
  2: updateMaterials,
  // 3: updateFurniture,
  // 4: updateResumen,
  // 5: updateMoodboard
}

const showStep = () => {
  const handler = stepHandlers[getCurrentStep()]
  
  if(handler) {
    handler();
  } else {
    console.warn('paso no reconocido:', getCurrentStep())
  }
  
  showStepCounter(getCurrentStep())
};


// Funcion que se encarga de validar si se puede avanzar, cambiar el estado y actualizar la vista.
const propertiesByStep = ['intro', 'style', 'colors', 'materials', 'furniture', 'moodboard'];
const stepsThatRequireSelection = ['style', 'colors', 'materials', 'furniture'];

export const goToNextStep = () => {
  const current = getCurrentStep();
  const property = propertiesByStep[current]

  const requiresValidation = stepsThatRequireSelection.includes(property)
  const userMadeSelection = !!userSelection[property] // El doble ! fuerza a convertir cualquier valor a su equivalente booleano:

  // Verifica si el usuario ya eligió algo para este paso.
  if(!requiresValidation || userMadeSelection) {
    if(current < propertiesByStep.length - 1) { // Verifica que no estás en el ultimo paso.
      setCurrentStep(current + 1);
      showStep()
      console.log("Paso:", getCurrentStep())
      console.log(userSelection)
    }
  }
}



export const initStepController = () => {
  // Llamados que activas mi funcion goToNextStep

  // Botones
  document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', goToNextStep)
    console.log("Use el botón")
  })

  //Cartas
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card'); // Esto se debe usar cuando algo se genera dinamicamente.
    if (card) {
      console.log("hola")
      const value = card.dataset.value;
      const current = getCurrentStep();
      const property = propertiesByStep[current];

      userSelection[property] = value;
      goToNextStep();
    }
  });
}





// // Next
// export const initStepController = () => {
//   const propertiesByStep = ['intro', 'style', 'colors', 'materials', 'furniture','moodboard'];

//   document.querySelectorAll('.next').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const current = getCurrentStep();
//       const property = propertiesByStep[current];

//       if (userSelection[property]) {
//         if (current < 6) {
//           setCurrentStep(current + 1);
//           showStep()
//         }
//       }
//       console.log(getCurrentStep())
//     });
//   });

//   // Aquí también podrías agregar la lógica para "Back"
// };