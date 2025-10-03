import { useState } from 'react';
import './Collections.css';

const dummyData = [
  { id: 1, title: 'Tile 1', img: '/placeholder.png' },
  { id: 2, title: 'Tile 2', img: '/placeholder.png' },
  { id: 3, title: 'Tile 3', img: '/placeholder.png' },
  { id: 4, title: 'Tile 4', img: '/placeholder.png' },
  { id: 5, title: 'Tile 5', img: '/placeholder.png' },
  { id: 6, title: 'Tile 6', img: '/placeholder.png' },
  { id: 7, title: 'Tile 7', img: '/placeholder.png' },
  { id: 8, title: 'Tile 8', img: '/placeholder.png' },
];

export default function Collections() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const prev = () => {
    setStartIndex(i => Math.max(i - 1, 0));
  };
  const next = () => {
    setStartIndex(i => Math.min(i + 1, dummyData.length - visibleCount));
  };

  const visibleItems = dummyData.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="collections-section">
      <div className="collections-header">
        <h2 className="title">Collections</h2>
        <p className="subtitle">Refined surfaces for every project, <br />
        from specification to installation.</p>
      </div>

      <div className="collections-gallery-wrapper">
        <button className="nav-arrow prev" onClick={prev} disabled={startIndex === 0}>
          ‹
        </button>

        <div className="collections-gallery">
          {visibleItems.map(item => (
            <div key={item.id} className="collection-card">
              <img src={item.img} alt={item.title} />
              <div className="card-title">{item.title}</div>
            </div>
          ))}
        </div>

        <button className="nav-arrow next" onClick={next} disabled={startIndex + visibleCount >= dummyData.length}>
          ›
        </button>
      </div>
    </section>
  );
}
