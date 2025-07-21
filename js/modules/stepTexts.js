import { stepTexts } from './data/moodboardData.js'
import { getCurrentStep } from './state.js'

export const updateStepTexts = () => {
  const current = getCurrentStep();
  const { title, subtitle } = stepTexts[current]

  document.querySelector('.header-texts__title').textContent = title
  document.querySelector('.header-texts__subtitle').textContent = subtitle
}

