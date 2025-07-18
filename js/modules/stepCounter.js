import { getCurrentStep, setCurrentStep } from "./state.js";


const stepsCounterBar = document.querySelectorAll('.step-counter__bar');
const currentStepText = document.getElementById('current-step-text');
const stepCounter = document.getElementById('step-counter')

export const showStepCounter = (index) => {
  const current = getCurrentStep()

  // Apague y prende el marcador de pasos
  if (current === 0 || current === 5 || current === 6) {
    stepCounter.classList.add('step-counter--inactive')
  } else {
    stepCounter.classList.remove('step-counter--inactive')
  }

  // Apaga y prende las barras según el paso
  const stepBars = document.querySelectorAll('.step-counter__bar')
  const currentTextStep = document.getElementById('current-text-step')

  stepBars.forEach((bar, i) => {
    bar.classList.toggle('step-counter__bar--active', i < index) // Agrega la clase si es true - La quita si es false
  })

  currentTextStep.innerHTML = index
}

