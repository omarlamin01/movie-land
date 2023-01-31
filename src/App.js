import {useState, useEffect} from "react";
import './App.css';
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=8e92b44d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    const searchMovies = async (searchTerm) => {
        if (searchTerm) {
            const response = await fetch(`${API_URL}&s=${searchTerm}`);
            const data = await response.json();
            setMovies(data.Search);
        } else {
            const response = await fetch(`${API_URL}&s=batman`);
            const data = await response.json();
            setMovies(data.Search);
        }
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => searchMovies(searchValue)}
                />
            </div>
            {
                movies.length > 0
                    ? (
                        <div className={"container"}>
                            { movies.map(movie => <MovieCard movie={movie}/>) }
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;
