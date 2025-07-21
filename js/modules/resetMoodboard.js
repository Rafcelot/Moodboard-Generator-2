import { getCurrentStep } from "./state.js"


export const resetMoodboard = () => {
  
  if ( getCurrentStep() !== 6) return
  const downloadButton = document.getElementById('next-btn')
  const buttonsCounter = document.getElementById('buttons-container')
  downloadButton.style.width = "50%"

  if (!document.getElementById('reset')) {
    // Crear botón
    const newResetButton = document.createElement('button');
    newResetButton.type = 'button';
    newResetButton.className = 'button-reset text-base';
    newResetButton.id = 'reset'
    newResetButton.textContent = 'Nuevo'

    // iIsertar botón
    buttonsCounter.insertBefore(newResetButton, buttonsCounter.firstChild)

  }



}