import React from 'react';
import './Booking.css';

export default function Booking() {
  return (
    <section className="booking-section">
      <div className="booking-container">
        {/* LADO ESQUERDO */}
        <div className="booking-left">
          <h2>Let’s Talk About<br /><span>Your Project</span></h2>
          <p>
            From first chat to final installation, we make beautiful floors easy. 
            Visit, call, or message <span className="highlight">Tred</span> to begin.
          </p>

          <div className="contact-block">
            <p>📍 <strong>Visit Us</strong></p>
            <p><strong>Moore Park</strong><br />Shop 10/2A Todman Ave, Kensington NSW 2033</p>
            <p><strong>Phone:</strong> (02) 9662 3509</p>
          </div>

          <div className="contact-block">
            <p>📧 <strong>Email Us</strong></p>
            <p>info@tredflooring.com.au</p>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <form className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Mobile *</label>
              <input type="tel" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Areas *</label>
              <input type="text" required defaultValue="Living" />
            </div>
            <div className="form-group">
              <label>Flooring interest *</label>
              <input type="text" required defaultValue="Carpet" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Tell us about your project</label>
            <textarea rows="4" />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
