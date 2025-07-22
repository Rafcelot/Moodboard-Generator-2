

import { getCurrentStep, setCurrentStep, userSelection } from './state.js';
import { showStep } from './stepController.js';
import { updateResumen } from './stepUpdates.js';

let cameFromResumen = false;

export const enableResumenReturnLogic = () => {
  document.addEventListener('click', (e) => {
    const resumenCard = e.target.closest('.card-resumen'); // tarjetas del resumen (paso 5) // debe tener su propio nombre por quesi le pongo card-style hay tarjetas anteriores con ese nombre y se va a guardar esos divs
    const card = e.target.closest('.card');          // tarjetas de selección (pasos 1 a 4)

    // 👈 1. Click en tarjeta del resumen (paso 5) → regresar al paso correspondiente
    if (getCurrentStep() === 5 && resumenCard) {
      const type = resumenCard.dataset.type;

      const stepMap = {
        style: 1,
        colors: 2,
        materials: 3,
        furniture: 4
      };

      const newStep = stepMap[type];
      if (newStep !== undefined) {
        cameFromResumen = (type !== "style"); // Esto permite que si se selecciona cambiar style pueda volver a seguir la secuencia
        setCurrentStep(newStep);
        showStep();
      }
      return; // 🛑 Detener aquí
    }

    // 👉 2. Click en tarjeta de selección (pasos 1 a 4) después de venir del resumen
    if (getCurrentStep() !== 5 && card && cameFromResumen) {
      const value = card.getAttribute('data-value');
      const type  = card.getAttribute('data-type');

      if (!value || !type) return; // 🛑 Validación mínima

      
      // Actualiza la selección del usuario
      userSelection[type] = value;

      // Si se cambió el estilo, se deben volver a seleccionar los pasos siguientes
      if ( type === 'style') {
        //Limpiar valores
        userSelection.colors = null;
        userSelection.materials = null;
        userSelection.furniture = null;

        // ir al paso siguiente
        setCurrentStep(2);
        showStep();
      } else {
        // Vuelve al paso 5 y actualiza el resumen
        setCurrentStep(5);
        showStep();

        // Espera al siguiente frame para asegurar que el DOM esté listo
        requestAnimationFrame(() => {
          updateResumen();
          cameFromResumen = false;
        });
      }
    }
  });
};



// EL PROBLEMA CON EL CODIGO INFERIOR ES QUE EL USERSELECION NO SE ALCANZA ACTUALIZAR POR QUE SE LE DA CLICK A LA NUEVA TARJETA AL MISMO TIEMPO








