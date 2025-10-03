import { useState } from 'react';
import './FinishFilters.css';

const dummyFinishes = [
  { id: 1, label: 'Blue Grey', img: '/placeholderFinish.png' },
  { id: 2, label: 'Black', img: '/placeholderFinish.png' },
  { id: 3, label: 'White', img: '/placeholderFinish.png' },
  { id: 4, label: 'Matt White', img: '/placeholderFinish.png' },
  { id: 5, label: 'Standard White', img: '/placeholderFinish.png' },
  { id: 6, label: 'Glossy White', img: '/placeholderFinish.png' },
  { id: 7, label: 'Cement Grey', img: '/placeholderFinish.png' },
  { id: 8, label: 'Matt White', img: '/placeholderFinish.png' },
  { id: 9, label: 'Standard White', img: '/placeholderFinish.png' },
  { id: 10, label: 'Glossy White', img: '/placeholderFinish.png' },
  { id: 11, label: 'Cement Grey', img: '/placeholderFinish.png' },
];

export default function FinishFilters() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  const prev = () => {
    setStartIndex(i => Math.max(i - 1, 0));
  };
  const next = () => {
    setStartIndex(i => Math.min(i + 1, dummyFinishes.length - visibleCount));
  };

  const visible = dummyFinishes.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="finish-section">
      <h2 className="finish-title">Find by finish</h2>
      <div className="finish-gallery-wrapper">
        <button className="nav-arrow prev" onClick={prev} disabled={startIndex === 0}>
          ‹
        </button>

        <div className="finish-gallery">
          {visible.map(item => (
            <div key={item.id} className="finish-card">
              <img className="finish-img" src={item.img} alt={item.label} />
              <div className="finish-label">{item.label}</div>
            </div>
          ))}
        </div>

        <button className="nav-arrow next" onClick={next} disabled={startIndex + visibleCount >= dummyFinishes.length}>
          ›
        </button>
      </div>
    </section>
  );
}
