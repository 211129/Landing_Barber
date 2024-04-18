import React, { useEffect, useState } from 'react';
import '../css/toast.css';

function Toast({ isVisible, message, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval);
          onClose(); // Cierra el toast automáticamente cuando el progreso termina
          return 0;
        }
        return prevProgress - 2; // Ajusta este valor según la velocidad de progreso que desees
      });
    }, 100); // Ajusta este valor según la duración total deseada del toast

    return () => clearInterval(interval);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast">
      <div className="toast__content">
        <span className="toast__message">{message}</span>
        <button className="toast__close" onClick={onClose}>X</button>
      </div>
      <div className="toast__progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default Toast;
