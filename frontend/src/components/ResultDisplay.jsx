import React from 'react';

const ResultDisplay = ({ result, unit, error }) => {
  if (error) {
    return <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>;
  }
  if (result === null) return null;
  return (
    <p style={{ fontSize: '1.3rem', marginTop: '20px' }}>
      Result: <strong>{result} {unit.toUpperCase()}</strong>
    </p>
  );
};

export default ResultDisplay;