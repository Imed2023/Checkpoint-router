import './App.css';
import { useState } from 'react';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import movies from './Movies';

import PlayMovie from './Components/PlayMovie';
import { Route, Routes } from 'react-router-dom';




function App() {

  const [vod, setVod] = useState(movies)
  const [byname, setByname] = useState("")
  const [byrate, setByrate] = useState(0)



  return (
    <div className="App">
      
      
     
    <SearchBar setByname={setByname} setByrate={setByrate}/>
    <Routes>

      <Route path='/' element={    <MovieList byname={byname} byrate={byrate}/>
}/>
      
      <Route path='/playmovie/:id' element={<PlayMovie movie/>}/>
      </Routes> 
     
      
      
    


      
  


    </div>
  );
}

export default App;
