import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar.js';
import Content from './component/content/content.js';
import {useEffect} from 'react';
import SearchIcon from './search.svg'
import {useState} from 'react';
import MovieCard from './movie';

//cc7a880b
const API_URL = 'http://www.omdbapi.com?apikey=cc7a880b';




function App() {
  const searchMovies = async (title)=>{
    const res =  await fetch(`${API_URL}&s=${title}`);
    const data =await res.json();
    setMovies(data.Search);
  }
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchEnterKey = (e) => {
    if (e.key === 'Enter') {
        searchMovies(searchTerm)
    }
}
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className='app'>
      <h1>MoviesLand</h1>

      <div className="search">
      <input
                    type="text"
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={searchEnterKey}
                />
       <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />          
      </div>
      {
        movies?.length > 0? (
          <div className='container'>
            {movies.map((movie)=> <MovieCard movie={movie}/>)}
            </div>
        ):(<div className='empty'>
          <h2>Movies not found</h2>
        </div>)
      }
    
      {/* <Navbar/>
      <Content/> */}
 

    </div>
  );
}

export default App;
