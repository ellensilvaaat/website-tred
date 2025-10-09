import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Project #{id}</h1>
      <p>Detalhes do projeto virão aqui futuramente.</p>
    </div>
  );
}
