import React from 'react'
import { BASE_URL, HEADERS } from '../../app';
import { useState } from 'react';
import Hero from '../hero/Hero';
import './search.css'
  

const Search = () => {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false); 

const handleSearch = async () => {
    if (!search.trim()) return;
  
    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?query=${encodeURIComponent(search)}`,
        { headers: HEADERS }
      );
      const data = await res.json();
      setSearchResults(data.results || []);
      console.log('search results', searchResults)
      setSearched(true);
    } catch (err) {
      console.error("Search failed:", err);
      setSearchResults([]);
      setSearched(true);

    }
  };

  return (
    <div>

        <div className="search-box">
          <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search movie..."
              className="search-input"
          />
          <button onClick={handleSearch} className='click'>Search</button>
        </div>

        {searchResults.length > 0 && (
          <Hero title="Search Results" movies={searchResults} />
        )}

        {/* SHORT CIRCUIT CONDITONAL RENDERING */}
        {/* {condition1 && condition2 && (expression) }*/}
        {/* for a condition to exist, it must either be true or have a value or it is defined  */}
        {searched && searchResults.length === 0 && (
          <p className="no-results">No results found for "{search}".</p>
        )}


     {/* {searchResults.length > 0 && <Hero title="Search Results" movies={searchResults} />} */}

        

    </div>
  )
}

export default Search