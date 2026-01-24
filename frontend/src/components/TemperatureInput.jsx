import React from 'react';

const TemperatureInput = ({ label, value, onChange, unit, onUnitChange, units }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>{label}: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter value"
        style={{ width: '120px', padding: '6px', marginRight: '8px' }}
      />
      <select value={unit} onChange={(e) => onUnitChange(e.target.value)}>
        {units.map((u) => (
          <option key={u.value} value={u.value}>
            {u.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperatureInput;