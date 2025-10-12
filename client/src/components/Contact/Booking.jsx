import React, { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    area: 'Living',
    flooring: 'Carpet',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      address: '',
      phone: ''
    };

    if (!form.name.trim()) {
      newErrors.name = 'This field is required.';
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = 'This field is required.';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email.';
      valid = false;
    }

    // Australian phone number: 9 or 10 digits
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!/^\d{9,10}$/.test(phoneDigits)) {
      newErrors.phone = 'Please enter a valid Australian phone number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
      alert('Form submitted successfully!');
      setForm({
        name: '',
        email: '',
        address: '',
        phone: '',
        area: 'Living',
        flooring: 'Carpet',
        message: ''
      });
      setErrors({ name: '', email: '', address: '', phone: '' });
    }
  };

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
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={errors.name ? { borderColor: 'red' } : {}}
              />
              {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={errors.email ? { borderColor: 'red' } : {}}
              />
              {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                style={errors.address ? { borderColor: 'red' } : {}}
              />
              {errors.address && <small style={{ color: 'red' }}>{errors.address}</small>}
            </div>
            <div className="form-group">
              <label>Mobile *</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                style={errors.phone ? { borderColor: 'red' } : {}}
              />
              {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Areas *</label>
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                required
              >
                <option value="Living">Living</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Full Home">Full Home</option>
              </select>
            </div>
            <div className="form-group">
              <label>Flooring interest *</label>
              <select
                name="flooring"
                value={form.flooring}
                onChange={handleChange}
                required
              >
                <option value="Carpet">Carpet</option>
                <option value="Timber">Timber</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Tell us about your project</label>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
