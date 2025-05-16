import React from 'react';
import Hero from '../hero/Hero';
import './recentlywatched.css'

const RecentlyWatched = () => {
  const movies = JSON.parse(localStorage.getItem('recentlyWatched')) || [];
  return  (
    <div className="div">
      <Hero title="Recently Watched" movies={movies}/>
    </div> 
  )
};

export default RecentlyWatched;


