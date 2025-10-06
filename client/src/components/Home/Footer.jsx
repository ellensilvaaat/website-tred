import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.svg" alt="Logo" />
            <p>“Quality is remembered long after price is forgotten.”<br />– Aldo Gucci</p>
            <div className="footer-socials">
              <i className="ri-linkedin-line"></i>
              <i className="ri-pinterest-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-facebook-line"></i>
            </div>
          </div>

          <div className="footer-links">
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Projects</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact us</h4>
            <p>(02) 9662 3509</p>
            <p>Shop 10/2A Todman Ave, Kensington NSW 2033</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 TRED FLOORING. ALL RIGHTS RESERVED.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
