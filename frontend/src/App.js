import React, { useState } from 'react';
import axios from 'axios';

import TemperatureInput from './components/TemperatureInput';
import ConversionButton from './components/ConversionButton';
import ResultDisplay from './components/ResultDisplay';

import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('F');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const units = [
    { value: 'C', label: 'Celsius (°C)' },
    { value: 'F', label: 'Fahrenheit (°F)' },
    { value: 'K', label: 'Kelvin (K)' },
  ];

  const handleConvert = async () => {
    if (!value.trim()) {
      setError('Please enter a numeric value');
      setResult(null);
      return;
    }

    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/convert', {
        value: parseFloat(value),
        fromUnit,
        toUnit,
      });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Is backend running?');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>

      <TemperatureInput
        label="From"
        value={value}
        onChange={setValue}
        unit={fromUnit}
        onUnitChange={setFromUnit}
        units={units}
      />

      <span style={{ fontSize: '1.4rem', margin: '0 10px' }}>→</span>

      <div style={{ margin: '10px 0' }}>
        <label>To: </label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      <ConversionButton onClick={handleConvert} />

      <ResultDisplay result={result} unit={toUnit} error={error} />
    </div>
  );
}

export default App;