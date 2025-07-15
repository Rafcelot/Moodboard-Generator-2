import { getCurrentStep } from "./state.js";

export const updateButtonVisibility = () => {
  const current = getCurrentStep()
  const nextButton = document.getElementById('next-btn')

  if (current === 0 || current === 5) {
    nextButton.style.display = "block"
    if(current === 5) {
      nextButton.innerText = "Generar Moodboard"
    }
  } else if (current => 1) {
    nextButton.style.display = "none"
  }
}