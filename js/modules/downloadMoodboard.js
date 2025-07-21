import { getCurrentStep, setCurrentStep } from "./state.js";


/**
 * Download moodboard - libreria html2canvas
 */

// ➊ Guarda tu handler en una variable para poder quitarlo
const handleDownload = () => {
  if (getCurrentStep() !== 6) return;                // ← ya no se dispara fuera del paso 6
  const moodboard = document.getElementById('moodboard');
  html2canvas(moodboard, { scale: 1 }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'moodboard.png';
    link.href     = canvas.toDataURL(); // → Convierte el canvas en una imagen PNG (base64).
    link.click();
  });
};

export const downLoadCanvas = () => {
  const btn = document.getElementById('next-btn');
  if (!btn) return;

  // Agrega el evento SOLO si estás en el paso 6
  if (getCurrentStep() === 6) {
    btn.removeEventListener('click', handleDownload);
    btn.addEventListener('click', handleDownload);
  } else {
    btn.removeEventListener('click', handleDownload); // ← Importante limpiar si saliste del paso 6
  }
};