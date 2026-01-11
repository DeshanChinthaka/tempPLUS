import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('F');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    if (!value) {
      setError('Please enter a value');
      return;
    }
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/convert', {
        value,
        fromUnit,
        toUnit,
      });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || 'Conversion failed');
    }
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>
      <span> to </span>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      {result && <p>Result: {result} {toUnit.toUpperCase()}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;