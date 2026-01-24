import React from 'react';

const ConversionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        margin: '15px 0',
        cursor: 'pointer',
      }}
    >
      Convert
    </button>
  );
};

export default ConversionButton;