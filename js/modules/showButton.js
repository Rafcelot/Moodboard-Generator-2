import { getCurrentStep } from "./state.js";

export const updateButtonVisibility = () => {
  const current = getCurrentStep();
  const nextButton = document.getElementById('next-btn');

  if (!nextButton) return; // Previene errores si no existe el botón

  // Mostrar botón solo en pasos 0 e 5
  if (current === 0) {
    nextButton.style.display = 'block';
    nextButton.innerText = 'Iniciar';
  } else if (current === 5) {
    nextButton.style.display = 'block';
    nextButton.innerText = 'Generar Moodboard';
  } else if (current === 6) {
    nextButton.style.display = 'block'
    nextButton.innerText = 'Descargar'
  }else {
    nextButton.style.display = 'none';
  }
};



