// Search.jsx
// Implements dynamic search with input updating the query string and showing results.

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the current query parameter
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';

  // Local state for input field
  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);

  // Update displayed query whenever URL changes (e.g., browser back/forward)
  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [location.search]);

  // Handle form submission to update URL without full page reload
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(input)}`);
  };

  return (
    <div>
      <h1>Search Page</h1>

      {/* Search input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter search term"
        />
        <button type="submit">Search</button>
      </form>

      {/* Display results */}
      {query ? (
        <h2>Search Results for: {query}</h2>
      ) : (
        <h2>No search query provided.</h2>
      )}
    </div>
  );
}

export default Search;
