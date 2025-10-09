import React from 'react';
import './WhyChoose.css';

export default function WhyChoose() {
  const items = [
  {
    icon: '/icon1.png',
    title: (<><span>Design-led<br />guidance</span></>),
    description: 'Personalised consultations for every space.'
  },
  {
    icon: '/icon2.png',
    title: (<><span>End-to-end<br />delivery</span></>),
    description: 'From quote to installation, we handle it.'
  },
  {
    icon: '/icon3.png',
    title: (<><span>Certified,<br />durable ranges</span></>),
    description: 'Water- and scratch-resistant options.'
  },
  {
    icon: '/icon4.png',
    title: (<><span>Clear<br />timelines</span></>),
    description: 'Installation scheduled within 1–2 weeks (project-dependent).'
  }
];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="titles">
          <h2>Why homeowners and designers choose <span className="highlight">Tred</span></h2>
          <p>
            We make beautiful floors easy, combining design guidance with dependable, end-to-end project management.
          </p>
        </div>

        <div className="cards-grid">
          {items.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon-wrapper">
                <div className="icon-circle">
                  <img src={item.icon} alt={item.title} />
                </div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="cta-button">Book your consultation</button>
      </div>
    </section>
  );
}
