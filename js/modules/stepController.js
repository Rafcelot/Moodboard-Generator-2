import { updateIntro, updateColors, updateStyles, updateMaterials, updateFurniture, updateResumen } from './stepUpdates.js';
// Estado 
import { getCurrentStep, setCurrentStep } from './state.js';
// User selection 
import { userSelection } from './state.js';
// Contador de pasos
import { showStepCounter } from './stepCounter.js';
// Mostrar botón
import { updateButtonVisibility } from './showButton.js';
// Textos
import { updateStepTexts } from './stepTexts.js';


// Mostrar paso
const stepHandlers = {
  0: updateIntro,
  1: updateStyles,
  2: updateColors,
  3: updateMaterials,
  4: updateFurniture,
  5: updateResumen,
  // 6: updateMoodboard
}

const showStep = () => {
  const handler = stepHandlers[getCurrentStep()]
  
  if(handler) {
    handler();
    console.log("Paso:", getCurrentStep())
    console.log(userSelection)
  } else {
    console.warn('paso no reconocido:', getCurrentStep())
  }
  
  showStepCounter(getCurrentStep())
  updateButtonVisibility()
  updateStepTexts()
};


// Funcion que se encarga de validar si se puede avanzar, cambiar el estado y actualizar la vista.
const propertiesByStep = ['intro', 'style', 'colors', 'materials', 'furniture', 'moodboard'];
const stepsThatRequireSelection = ['style', 'colors', 'materials', 'furniture'];

export const goToNextStep = () => {
  const current = getCurrentStep(); 0
  const property = propertiesByStep[current] 

  const requiresValidation = stepsThatRequireSelection.includes(property)
  const userMadeSelection = !!userSelection[property] // El doble ! fuerza a convertir cualquier valor a su equivalente booleano:

  // Verifica si el usuario ya eligió algo para este paso.
  if(!requiresValidation || userMadeSelection) { // Esto se hace para avanzar en el primer paso ya que el usuario no ha seleccionado nada
    if(current < propertiesByStep.length - 1) { // Verifica que no estás en el ultimo paso.
      setCurrentStep(current + 1);
      showStep()
    }
  }
}

export const goToBackStep = () => {
  const current = getCurrentStep();
  
  setCurrentStep(current - 1)
  showStep()
}



export const initStepController = () => {
  // =============================
  // BOTONES: Adelante y Atrás
  // =============================
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev');

  nextBtn.addEventListener('click', goToNextStep);
  prevBtn.addEventListener('click', goToBackStep);


  // =============================
  // SELECCIÓN DE CARTAS DINÁMICAS
  // =============================
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (card) {
      console.log("hola");

      const value = card.dataset.value;
      const current = getCurrentStep();
      const property = propertiesByStep[current];

      userSelection[property] = value;

      goToNextStep();
    }
  });
};





