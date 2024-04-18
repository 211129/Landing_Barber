import React from 'react';
import hairdryerIcon from '../assets/icons/hairdryer.svg';
import razorIcon from '../assets/icons/razor.svg';
import barberShopIcon from '../assets/icons/barber-shop.svg';
import soapIcon from '../assets/icons/soap.svg';
import '../css/services.css'; // Asegúrate de que la ruta al archivo CSS es correcta

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="services-hero">
        <span className="tag">Colocho Barber Shop</span>
        <h3 className="section__heading services__title">
          Nuestros Servicios
        </h3>
        <p className="services-hero__description">
          Además de una excelente valoración de nuestros clientes, 
          ofrecemos un espacio temático, profesionales cualificados,
          productos de excelencia y una ubicación inmejorable.
        </p>
        <a href="#contact" className="primary-btn">
          Contáctanos
        </a>
      </div>

      <div className="services-content">
        <ul className="services__list">
          <li className="services__item">
            <img 
              src={hairdryerIcon} 
              alt="secador de pelo" 
              className="services__item-icon"
            />
            <h4 className="services__item-title">Estilismo de Cabello</h4>
            <p className="services__item-description">
              Realizamos el estilo deseado usando productos 
              profesionales y adecuados para cada tipo de cabello.
              Además, podemos ayudarte a encontrar el mejor 
              corte según tu rostro.
            </p>
          </li>
          <li className="services__item">
            <img 
              src={razorIcon} 
              alt="navaja" 
              className="services__item-icon"
            />
            <h4 className="services__item-title">Diseño de Barba</h4>
            <p className="services__item-description">
              Una barba bien hecha marca toda la diferencia en la apariencia 
              y autoestima de un hombre, por lo que realizamos todo el 
              proceso de limpieza, hidratación y diseño con productos 
              adecuados para tu tipo de piel.
            </p>
          </li>
          <li className="services__item">
            <img 
              src={barberShopIcon} 
              alt="tienda de la barbería" 
              className="services__item-icon"
            />
            <h4 className="services__item-title">ColoShop</h4>
            <p className="services__item-description">
              Ofrecemos un espacio para aquellos clientes interesados 
              en nuestros productos, con profesionales listos para recomendar 
              lo mejor para el cuidado de tu apariencia.
            </p>
          </li>
          <li className="services__item">
            <img 
              src={soapIcon} 
              alt="jabón facial" 
              className="services__item-icon"
            />
            <h4 className="services__item-title">Limpieza Facial</h4>
            <p className="services__item-description">
              Todos necesitamos cuidar bien de nuestra piel para 
              mantener una apariencia saludable, y qué mejor que una limpieza 
              con productos de calidad y esteticistas expertos en el tema.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
