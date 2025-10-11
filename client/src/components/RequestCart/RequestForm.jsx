import React from 'react';
import './SampleRequestPage.css';

export default function RequestForm({ form, onChange, onSubmit }) {
  return (
    <form className="sample-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={onChange}
          required
        />
      </div>
<div className="bnt-sub">
      <button type="submit" className="submit-btn">
        Submit Request
      </button>
      </div>
    </form>
  );
}
