import React, { useEffect, useState } from 'react';
import { BASE_URL, HEADERS } from '../../app';
import Hero from '../hero/Hero';
import RecentlyWatched from '../recentlywatched/RecentlyWatched';
import Navbar from '../navbar/Navbar';
import './home.css'



const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, { headers: HEADERS });
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [rated, setRated] = useState([]);
  const [tv, setTV] = useState([]);


  useEffect(() => {
    fetchData('/trending/movie/day').then(setTrending);
    fetchData('/movie/top_rated').then(setRated);
    fetchData('/trending/tv/day').then(setTV);
  }, []);  

  return (
    <div className="container">
      
     <Navbar/>

      <div className="trending">
       <Hero title="Trending Movies" movies={trending}/>
      </div>

      <div className="top-rated">
        <Hero title="Top Rated Movies" movies={rated} />
      </div>

      <div className="tv-shows">
       <Hero title="Trending TV Shows" movies={tv} />
      </div>

      <div className="recently-watched">
        <RecentlyWatched/>
      </div>
    </div>
  );
};

export default Home;








