import React, { useState, useEffect } from 'react';
import './Collections.css';

const allCollections = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Collection ${i + 1}`,
  type: i % 2 === 0 ? 'Solid timber' : 'Hybrid',
  specs: ['Water', 'Scratch', 'Low‑VOC', 'Acoustic'].slice(0, 3),
  image: '/collection-placeholder.png'
}));

export default function Collections() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    specs: []
  });

  const filtered = allCollections.filter(col => {
    const matchesSearch = col.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeFilters.type ? col.type === activeFilters.type : true;
    const matchesSpecs = activeFilters.specs.length > 0
      ? activeFilters.specs.every(spec => col.specs.includes(spec))
      : true;
    return matchesSearch && matchesType && matchesSpecs;
  });

  const toggleFilterSpec = (spec) => {
    setActiveFilters(prev => {
      const exists = prev.specs.includes(spec);
      return {
        ...prev,
        specs: exists
          ? prev.specs.filter(s => s !== spec)
          : [...prev.specs, spec]
      };
    });
  };

  // Fecha modal quando apertar ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setFiltersOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="collections-section">
      <div className="collections-container">
        <p className="collections-intro">
          Design‑led ranges in carpet, engineered and solid timber, hybrid and laminate.<br />
          Built to last, specified with care.
        </p>

        <div className="collections-filter-bar">
          <input
            type="text"
            placeholder="Solid timber"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div
            className="filters-button"
            onClick={() => setFiltersOpen(true)}
          >
            Filters ▾
          </div>
          <button className="search-button">
  <img src="/public/search-icon.png" alt="Search" style={{ width: '20px', height: '20px' }} />
</button>
        </div>

        <div className="collections-grid">
          {filtered.map(col => (
            <div key={col.id} className="collection-card">
              <div
                className="collection-bg"
                style={{ backgroundImage: `url(${col.image})` }}
              />
              <div className="collection-overlay">
                <h3>{col.name}</h3>
                <p>{col.type}</p>
                <p>{col.specs.join(' / ')}</p>
                <button className="request-button">Request samples</button>
              </div>
            </div>
          ))}
        </div>

        <button className="collections-cta">Book your consultation</button>
      </div>

      {filtersOpen && (
        <div className="filters-modal-backdrop" onClick={() => setFiltersOpen(false)}>
          <div className="filters-modal" onClick={e => e.stopPropagation()}>
            <button className="filters-close-btn" onClick={() => setFiltersOpen(false)}>×</button>
            <h3>Filters</h3>
            <div className="filter-group">
              <label>Type:</label>
              <select
                value={activeFilters.type}
                onChange={e =>
                  setActiveFilters(prev => ({ ...prev, type: e.target.value }))
                }
              >
                <option value="">All</option>
                <option value="Solid timber">Solid timber</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Specifications:</label>
              {['Water', 'Scratch', 'Low‑VOC', 'Acoustic'].map((spec) => (
                <div key={spec} className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    id={`spec-${spec}`}
                    checked={activeFilters.specs.includes(spec)}
                    onChange={() => toggleFilterSpec(spec)}
                  />
                  <label htmlFor={`spec-${spec}`}>{spec}</label>
                </div>
              ))}
            </div>
            <button className="apply-filters-btn" onClick={() => setFiltersOpen(false)}>
              Apply
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
