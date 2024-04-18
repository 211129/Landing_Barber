import React, { useState } from 'react';
import Toast from './Toast'; // Importa el componente Toast desde su ubicación relativa
import '../css/appointment.css'; // Asegúrate de que la ruta al archivo CSS es correcta

function AppointmentSection() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías el envío del formulario, como validación y enviar los datos a un servidor

    // Muestra el toast con un mensaje
    setToastMessage('Solicitud enviada. Espera a que nos pongamos en contacto contigo.');
    setToastVisible(true);

    // Oculta el toast después de un tiempo
    setTimeout(() => {
      setToastVisible(false);
    }, 5000); // Ajusta este tiempo según sea necesario
  };

  return (
    <section id="appointment" className="appointment">
      <span className="tag">Colocho Barber Shop</span>
      <h3 className="section__heading appointment__title">
        Reservas
      </h3>

      <form className="appointment__form" onSubmit={handleSubmit}>
        <div className="appointment__form-field">
          <input 
            type="text" 
            id="name" 
            className="appointment__input" 
            placeholder="Nombre"
            required
          />
          <label htmlFor="name" className="appointment__label">Nombre</label>
        </div>
        
        <div className="appointment__form-field">
          <input 
            type="email" 
            id="email" 
            className="appointment__input" 
            placeholder="Correo electrónico"
            required
          />
          <label htmlFor="email" className="appointment__label">Correo electrónico</label>
        </div>

        <div className="appointment__form-field">
          <input 
            type="tel" 
            id="telephone" 
            className="appointment__input"
            placeholder="Teléfono"
            required
          />
          <label htmlFor="telephone" className="appointment__label">Teléfono</label>
        </div>

        <div className="appointment__form-field">
          <textarea 
            rows="4" 
            id="message" 
            className="appointment__textarea"
            placeholder="Mensaje"
          />
          <label htmlFor="message" className="appointment__label">Mensaje</label>
        </div>

        <fieldset className="appointment__fieldset">
          <legend className="appointment__fieldset-legend">¿Cómo prefieres que nos pongamos en contacto contigo?</legend>
          <label htmlFor="radio-whatsapp" className="appointment__legend-label">
            <input 
              type="radio" 
              id="radio-whatsapp" 
              name="contact" 
              value="whatsapp" 
              className="appointment__radio-input" 
              defaultChecked
            />Whatsapp
          </label>
          <label htmlFor="radio-email" className="appointment__legend-label">
            <input 
              type="radio" 
              id="radio-email" 
              name="contact" 
              value="email" 
              className="appointment__radio-input"
            />Correo electrónico
          </label>
          <label htmlFor="radio-call" className="appointment__legend-label">
            <input 
              type="radio" 
              id="radio-call" 
              name="contact" 
              value="call" 
              className="appointment__radio-input"
            />Llamada
          </label>
        </fieldset>

        <label className="appointment__legend-label checkbox">
          <input type="checkbox" className="appointment__checkbox-input" />
          ¿Te gustaría recibir nuestras novedades por correo electrónico?
        </label>

        <button type="submit" className="primary-btn appointment__form-btn">Enviar</button>
      </form>

      <span className="appointment__schedule">
        Abrimos de lunes a domingo de 11am a 9pm
      </span>

      <Toast 
        isVisible={isToastVisible} 
        message={toastMessage} 
        onClose={() => setToastVisible(false)}
      />
    </section>  
  );
}

export default AppointmentSection;



