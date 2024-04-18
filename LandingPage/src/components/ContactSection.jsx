import React from 'react';
import locationIcon from '../assets/icons/location-pin.svg';
import emailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';
import '../css/contact.css'; // Asegúrate de que la ruta a tu CSS es correcta

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-details">
        <span className="tag">Colocho Barber</span>
        <h3 className="section__heading contact-details__title">
          Contacto
        </h3>
        <ul className="contact-details__list">
          <li className="contact-details__item">
            <img 
              src={locationIcon} 
              alt="ícono de ubicación" 
              className="contact-details__icon"
            />
            <address>
              Prosperidad 113, Fraccionamiento vida mejor, 29045 Tuxtla Gutiérrez, Chis.
            </address>
          </li>
          <li className="contact-details__item">
            <img 
              src={emailIcon} 
              alt="ícono de correo electrónico" 
              className="contact-details__icon"
            />
            <a href="mailto:colocho@barbershop.com" className="contact-details__link">
              colocho@barbershop.com
            </a>
          </li>
          <li className="contact-details__item">
            <img 
              src={phoneIcon} 
              alt="ícono de teléfono" 
              className="contact-details__icon"
            />
            <a href="https://web.whatsapp.com/send?phone=11999999999" className="contact-details__link">
              (961) 111-83-12
            </a>
          </li>
        </ul>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15281.861765521591!2d-93.06068245458539!3d16.75350346146107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1708804125883!5m2!1ses!2smx"
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="contact__map">
      </iframe>
    </section>
  );
}

export default ContactSection;

