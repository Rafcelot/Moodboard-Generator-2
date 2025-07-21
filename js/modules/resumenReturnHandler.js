

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
        cameFromResumen = true;
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

      console.log("✅ Valor capturado:", value);
      console.log("📦 Tipo detectado:", type);

      // Actualiza la selección del usuario
      userSelection[type] = value;

      // Vuelve al paso 5 y actualiza el resumen
      setCurrentStep(5);
      showStep();

      // Espera al siguiente frame para asegurar que el DOM esté listo
      requestAnimationFrame(() => {
        updateResumen();
        cameFromResumen = false;
      });
    }
  });
};



// EL PROBLEMA CON EL CODIGO INFERIOR ES QUE EL USERSELECION NO SE ALCANZA ACTUALIZAR POR QUE SE LE DA CLICK A LA NUEVA TARJETA AL MISMO TIEMPO


// import { getCurrentStep, setCurrentStep, userSelection } from './state.js';
// import { showStep } from './stepController.js';
// import { updateResumen } from './stepUpdates.js';

// let cameFromResumen = false;

// export const enableResumenReturnLogic = (formCounter) => {
//   document.addEventListener('click', (e) => {
//     const resumenCard = e.target.closest('.prueba');
//     const card = e.target.closest('.card');

//     // 👈 Paso 5: clic sobre tarjeta del resumen
//     if (getCurrentStep() === 5 && resumenCard) {
//       const type = resumenCard.dataset.type;
//       console.log("tattata", type) // funciona - furniture
//       const stepMap = {
//         style: 1,
//         colors: 2,
//         materials: 3,
//         furniture: 4
//       };

//       const newStep = stepMap[type];
//       if (newStep !== undefined) {
//         cameFromResumen = true;
//         setCurrentStep(newStep);
//         showStep();

//         return
//       }
//     }

//     // 👉 Pasos 1 a 4: se hace clic en una tarjeta
//     if (getCurrentStep() !== 5 && card && cameFromResumen) { // esto se esta imprimiendo antes de cuando deberia
//       const value = card.getAttribute('data-value');
//       console.log("valor capturado", value); // SE SUPONE QUE ACA ESTA EL ERROR
//       console.log("puto valor que le di a ca tarjeta", value)
//       if (!value) return;

//       const stepKeys = {
//         1: "style",
//         2: "colors",
//         3: "materials",
//         4: "furniture"
//       };

//       const key = stepKeys[getCurrentStep()];
//       userSelection[key] = value;

//       if (cameFromResumen) {
//         console.log("noooooooooooo")
//         console.log("naaaa", userSelection)
//         setCurrentStep(5);
//         showStep();

//         setTimeout(() => {
//           console.log("👉 DOM ya tiene", document.getElementById("resumen-furniture")); 
//           updateResumen();
//         }, 0);


//         cameFromResumen = false;
//       }
//     }
//   });
// }












