import { getCurrentStep, setCurrentStep } from "./state.js";


const stepsCounterBar = document.querySelectorAll('.step-counter__bar');
const currentStepText = document.getElementById('current-step-text');
const stepCounter = document.getElementById('step-counter')

export const showStepCounter = () => {
  const current = getCurrentStep()
  if (current === 0) {
    stepCounter.classList.add('step-counter--inactive')
  } else {
    stepCounter.classList.remove('step-counter--inactive')
  }
}

