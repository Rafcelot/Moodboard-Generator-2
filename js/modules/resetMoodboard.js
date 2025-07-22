import { getCurrentStep, setCurrentStep, userSelection } from "./state.js"
import { showStep } from "./stepController.js"



export const resetMoodboard = () => {
  
  if ( getCurrentStep() !== 6) return
  const downloadButton = document.getElementById('next-btn')
  const buttonsCounter = document.getElementById('buttons-container')
  downloadButton.style.width = "50%"

  if (!document.getElementById('reset')) {
    // Crear botón
    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.className = 'button-reset text-base';
    resetButton.id = 'reset'
    resetButton.textContent = 'Nuevo'

    // insertar botón
    buttonsCounter.insertBefore(resetButton, buttonsCounter.firstChild)

    resetButton.addEventListener('click', () => {
      // Resturar todo los valores 
      userSelection.intro     = null;
      userSelection.style     = null;
      userSelection.colors    = null;
      userSelection.materials = null;
      userSelection.furniture = null;
      userSelection.moodboard = null;
      
      // Reiniciar paso
      setCurrentStep(0)
      showStep()

      // Remover boton reset
      if(resetButton) resetButton.remove()
      downloadButton.style.width = "100%"  

    })
  }
}