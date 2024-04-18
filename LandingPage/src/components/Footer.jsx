import React from 'react';
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import '../css/footer.css'; // Asegúrate de que la ruta a tu CSS es correcta

function Footer() {
  // Añade aquí la lógica para manejar la suscripción al boletín si es necesario
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info-container">
          <div className="footer__info-content">
            <h4 className="footer__info-title">
              Colocho<em>Barber Shop</em>
            </h4>
            <p className="footer__content-description">
              Un componente clave de un ambiente saludable para 
              la autoestima es que sea estimulante. 
              Debe proporcionar un apoyo incondicional.
            </p>
            <ul className="footer__social-media">
              <li className="social-media__item">
                <img src={facebookIcon} alt="facebook" />
              </li>
              <li className="social-media__item">
                <img src={twitterIcon} alt="twitter" />
              </li>
              <li className="social-media__item">
                <img src={instagramIcon} alt="instagram" />
              </li>
            </ul>
          </div>

          <div className="footer__info-news">
            <h5 className="footer__news-title">Boletín informativo</h5>
            <form className="footer__news-form">
              <input 
                type="email" placeholder="tu@correo.com" 
                aria-label="ingresa tu correo para novedades" 
                className="footer__news-input" 
                required
              />
              <button type="submit" className="primary-btn footer__news-btn">
                Suscríbete
              </button>
            </form>
            <span className="footer__news-description">
              Mantente informado sobre nuestras promociones, nuevos productos 
              y servicios.
            </span>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright-container">
          <p className="copyright">
            Colocho Barber Shop &copy; {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#about" className="footer__nav-link">Acerca de</a>
              </li>
              <li className="footer__nav-item">
                <a href="#services" className="footer__nav-link">
                  Servicios
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#prices" className="footer__nav-link">Precios</a>
              </li>
              <li className="footer__nav-item">
                <a href="#appointment" className="footer__nav-link">
                  Reservas
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

