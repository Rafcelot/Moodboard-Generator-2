import { updateStyles } from './stepUpdates.js';

let currentStep = 0;

const userSelection = {
  intro: 'ok',
  style: null,
  colors: null,
  materials: null,
  furniture: null,
  moodboard: "ok"
};

const showStep = () => {
  updateStyles();
};

export const initStepController = () => {
  const propertiesByStep = ['intro', 'style', 'colors', 'materials', 'furniture','moodboard'];

  document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
      const property = propertiesByStep[currentStep];
      if (userSelection[property]) {
        if (currentStep < 6) {
          currentStep++;
          showStep(currentStep);
        }
      }
    });
  });

  // Aquí también podrías agregar la lógica para "Back"
};

