import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg-decor">
      </div>

      <div className="footer-container">
        {/* TOPO */}
        <div className="footer-top">
          {/* Lado Esquerdo - Logo, frase, redes sociais */}
          <div className="footer-left">
            <img src="/logofooter.svg" alt="TRED Logo" className="footer-logo" />
            <p className="footer-quote">
              “Quality is remembered long after price is forgotten.”<br />– Aldo Gucci
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          {/* Lado Direito - Menu e localização lado a lado */}
          <div className="footer-right-group">
            <div className="footer-nav">
              <h4>Menu</h4>
              <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
            </div>
            <div className="footer-location">
              <h4>Contact us</h4>
              <p>(02) 9662 3509</p>
              <p>Shop 10/2A Todman Ave,<br />Kensington NSW 2033</p>
            </div>
          </div>
        </div>

        {/* Rodapé Legal */}
        <div className="footer-bottom">
          <span>© 2025 TRED FLOORING. ALL RIGHTS RESERVED.</span>
          <NavLink to="/privacy" className="footer-privacy">Privacy Policy</NavLink>
        </div>
      </div>
    </footer>
  );
}





