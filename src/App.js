import {useEffect} from "react";
import './App.css';
import SearchIcon from "./search.svg";

const API_URL = 'https://www.omdbapi.com/?apikey=8e92b44d';
const movie = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}

const App = () => {
    useEffect(() => {
        // searchMovies('batman');
    }, []);

    const searchMovies = async (searchTerm) => {
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        console.log(data.Search);
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value="batman"
                    onChange={() => {
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => searchMovies('batman')}
                />
            </div>
            <div className={"container"}>
                <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} alt={movie.Title} />
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
