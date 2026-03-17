import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch, initialValue = '', loading = false }) {
  const [keyword, setKeyword] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar__icon">🔍</span>
      <input
        id="search-input"
        type="text"
        className="search-bar__input"
        placeholder="Search jobs... e.g. React, Python, Designer"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        aria-label="Search jobs"
      />
      <button
        id="search-button"
        type="submit"
        className="search-bar__btn"
        disabled={loading || !keyword.trim()}
      >
        {loading ? 'Searching...' : 'Search Jobs'}
      </button>
    </form>
  );
}
