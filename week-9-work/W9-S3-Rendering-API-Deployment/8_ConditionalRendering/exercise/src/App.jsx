import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State for the number of cat facts to fetch
  const [maxLength, setMaxLength] = useState(10);

  // State for the retrieved cat facts
  const [catFacts, setCatFacts] = useState([]);

  // State to store error messages
  const [error, setError] = useState(null);

  // State to indicate loading status
  const [loading, setLoading] = useState(false);

  // Handles changes in the input field
  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  // Handles search button click
  const handleSearch = async () => {
    if (!maxLength) {
      // If input is empty, show an error and clear previous results
      setError('Please enter a Maximum Length.');
      setCatFacts([]);
      return;
    }

    // Clear previous errors and start loading
    setError(null);
    setLoading(true);
    setCatFacts([]);

    try {
      // Make GET request to Cat Facts API using Axios
      const response = await axios.get(`https://catfact.ninja/facts?limit=${maxLength}`);

      // Destructure the data array from API response
      const { data } = response.data;

      // Conditional logic: if no facts returned, store empty array
      if (!data || data.length === 0) {
        setCatFacts([]);
      } else {
        setCatFacts(data);
      }
    } catch {
      // Handle network or API errors
      setError('Could not retrieve information. Please check your connection.');
      setCatFacts([]);
    } finally {
      // Stop the loading indicator
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '50px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Main container card */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center',
        }}
      >
        {/* App title */}
        <h1 style={{ color: '#333', marginBottom: '10px' }}> Cat Facts Explorer </h1>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          Enter the number of cat facts to fetch and click <strong>Search</strong>.
        </p>

        {/* Input field for number of facts */}
        <input
          type="number"
          placeholder="Enter number of cat facts"
          value={maxLength}
          onChange={handleChange}
          style={{
            padding: '12px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginBottom: '10px',
          }}
        />

        {/* Search button */}
        <button
          onClick={handleSearch}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Search
        </button>

        {/* Loading state */}
        {loading && (
          <p style={{ color: '#17a2b8', marginTop: '20px' }}>Loading cat facts...</p>
        )}

        {/* Error message */}
        {error && (
          <div
            style={{
              marginTop: '20px',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px',
              borderRadius: '8px',
            }}
          >
            {error}
          </div>
        )}

        {/* Conditional rendering of cat facts or "No facts" message */}
        {!loading && !error && (
          <div style={{ marginTop: '25px', textAlign: 'left' }}>
            {catFacts.length > 0 ? (
              <>
                <h2 style={{ color: '#333', marginBottom: '15px' }}>
                  Here are {catFacts.length} Cat Facts ^ . ^
                </h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {catFacts.map((fact, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#e9ecef',
                        padding: '10px',
                        borderRadius: '6px',
                        marginBottom: '8px',
                      }}
                    >
                      {fact.fact}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
                No facts to display.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
