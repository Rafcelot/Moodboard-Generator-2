

// Paso actual del usuario
let currentStep = 0

// Objeto donde se guardan las elecciones del usuario.
export const userSelection = {
  intro: null,
  style: null,
  colors: null,
  materials: null,
  furniture: null,
  moodboard: null
};

// Sirve para cambiar el valor de currentStep
export const setCurrentStep = (value) => {
  currentStep = value;
}

// Sirve para leer el valor de currentStep
export const getCurrentStep = () => {
  return currentStep
}