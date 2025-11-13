// App.jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [maxLength, setMaxLength] = useState(10);
  const [catFacts, setCatFacts] = useState([]);

  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://catfact.ninja/facts?limit=${maxLength}`);
      setCatFacts(response.data.data);
    } catch (err) {
      console.error('Error fetching cat facts:', err);
      setCatFacts([]);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Cat Facts</h1>
      <input
        type="number"
        placeholder="Enter the number of cat facts you'd like"
        value={maxLength}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '10px', marginTop: '10px', width: '100%' }}
      >
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
        <h2>Here are {catFacts.length} Cat Facts</h2>
        <ul>
          {catFacts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
