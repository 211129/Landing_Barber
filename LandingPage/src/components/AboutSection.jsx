import React from 'react';
import barberCuttingImage from '../assets/images/barber-cutting.jpg'; // Asegúrate de que la ruta es correcta
import '../css/about.css'; // Asegúrate de que la ruta al archivo CSS es correcta

function AboutSection() {
  return (
    <main>
      <section id="about" className="about">
        <div className="about__img-container">
          <div className="about__since-detail">
            <span className="since-detail__year">
              <em>since</em> <br /> 2019
            </span>
          </div>
          <img 
            src={barberCuttingImage} 
            alt="barbero haciendo la barba del cliente" 
            className="about__img"
          />
        </div>

        <div className="about__details">
          <span className="tag">Nuestra historia</span>
          <h2 className="section__heading about__details-title">
            Barbería Tradicional & Cuidados Contemporáneos
          </h2>
          <p className="about__details-paragraph">
            Ubicada a las orillas de Tuxtla Gutiérrez, 
            nuestra barbería trae al mercado lo mejor 
            para tu cabello y barba.
          </p>
          <p className="about__details-paragraph">
            Ofrecemos profesionales experimentados y al tanto de 
            los cambios en el mundo de la moda. La atención tiene un estándar
            de excelencia y agilidad, garantizando calidad y 
            satisfacción de nuestros clientes.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutSection;
  
