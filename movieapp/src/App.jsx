import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/home/Home';
import MovieDetail from './componets/moviedetails/MovieDetails';
import Search from './componets/search/Search';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetail/>}/>
            <Route path="search" element={<Search/>}/>
         </Routes>
      </Router>
  </div>
  )
}

export default App
