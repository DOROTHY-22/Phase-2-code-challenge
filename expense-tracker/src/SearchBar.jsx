import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search Expenses:</label>
      <input
        type="text"
        id="search"
        placeholder="Search by name or description"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;