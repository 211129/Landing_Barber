import React from 'react';
import barberWorkingImage from '../assets/images/barber-working.jpg'; // Asegúrate de que la ruta es correcta
import '../css/prices.css'; // Asegúrate de que la ruta al archivo CSS es correcta

function PricesSection() {
  return (
    <section id="prices" className="prices">
      <div className="prices-container">
        <div className="prices-heading">
          <span className="tag">Colocho Barber Shop</span>
          <h2 className="section__heading prices-heading__title">
            Nuestros Precios
          </h2>
        </div>

        <div className="prices__card-container">
          <div className="prices__card">
            <ul className="prices__card-list">
              <li className="prices__card-item">
                <span className="prices__item-content">Corte Normal</span>
                <div className="prices__card-separator"></div>
                <span className="prices__item-content">$ 50</span>
              </li>
              <li className="prices__card-item">
                <span className="prices__item-content">Barba</span>
                <div className="prices__card-separator"></div>
                <span className="prices__item-content">$ 60</span>
              </li>
              <li className="prices__card-item">
                <span className="prices__item-content">
                  Desvanecidos
                </span>
                <div className="prices__card-separator"></div>
                <span className="prices__item-content">$ 75</span>
              </li>
              <li className="prices__card-item">
                <span className="prices__item-content">
                  Cabello + Barba
                </span>
                <div className="prices__card-separator"></div>
                <span className="prices__item-content">$ 120</span>
              </li>
              <li className="prices__card-item">
                <span className="prices__item-content">
                  Cabello + Limpieza facial
                </span>
                <div className="prices__card-separator"></div>
                <span className="prices__item-content">$ 110</span>
              </li>
            </ul>
            <a href="#appointment" className="primary-btn prices__card-btn">
              Reserva tu hora
            </a>
          </div>

          <img 
            src={barberWorkingImage} 
            alt="nuestro barbero cortando cabello" 
            className="prices__img"
          />
        </div>
      </div>
    </section>
  );
}

export default PricesSection;
