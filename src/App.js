import {useEffect} from "react";
import './App.css';
import SearchIcon from "./search.svg";

const API_URL = 'https://www.omdbapi.com/?apikey=8e92b44d';

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
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => searchMovies('batman')}
                />
            </div>
        </div>
    );
}

export default App;
