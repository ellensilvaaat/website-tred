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
    const newErrors = { name: '', email: '', address: '', phone: '' };

    if (!form.name.trim()) {
      newErrors.name = 'This field is required.';
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = 'This field is required.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email.';
      valid = false;
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const apiUrl = import.meta.env.VITE_API_URL;  // pega da variável de ambiente

    try {
      const response = await fetch(`${apiUrl}/sample`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        console.log('Server response:', data);
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
      } else {
        alert('Failed to submit form. Please try again.');
        console.error(data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
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
        <form className="booking-form" onSubmit={handleSubmit}>
          {/* … seus campos de formulário … */}
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
