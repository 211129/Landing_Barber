import React from 'react';
import menuIcon from '../assets/icons/menu-icon.svg';
import closeIcon from '../assets/icons/close-icon.svg';
import '../css/Header.css';


function Header() {
  // Aquí podrías incluir la lógica para manejar la apertura y cierre del menú
  return (
    <header className="header">
    <div className="header__shadow">
      <div className="header__content">
        <div className="header__content-hero">
          <h1 className="header__title">
            <a href="#">Colocho<em>Barber Shop</em></a>
          </h1>
          <img 
            src={menuIcon} 
            alt="abrir menú" 
            className="header__menu-icon"
            // onClick={handleMenuToggle} si tienes lógica para manejar el menú
          />
          <div className="nav-container">
            <img 
              src={closeIcon} 
              alt="cerrar menú" 
              className="nav__close-icon"
              // onClick={handleMenuToggle} si tienes lógica para manejar el menú
            />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="#about" className="header__nav-link">
                    Acerca de
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#services" className="header__nav-link">
                    Servicios
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#prices" className="header__nav-link">
                    Precios
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#appointment" className="header__nav-link">
                    Reservas
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#contact" className="header__nav-link">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header__content-intro">
          <span className="content-intro__welcome">
            Bienvenidos a Colocho Barber Shop
          </span>
          <h2 className="content-intro__title">Tu cabello habla de ti</h2>
          <p className="content-intro__message">
            Proporcionamos autoestima y calidad a nuestros clientes.
          </p>
          <a href="#services" className="primary-btn">
            Nuestros servicios
          </a>
        </div>   
      </div>
    </div>
  </header>
  );
}

export default Header;
