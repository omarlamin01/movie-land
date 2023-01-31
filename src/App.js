import {useEffect} from "react";
import './App.css';
import SearchIcon from "./search.svg";

const API_URL = 'https://www.omdbapi.com/?apikey=8e92b44d';

const App = () => {
    useEffect(() => {
        searchMovies('batman');
    }, []);

    const searchMovies = async (searchTerm) => {
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        console.log(data.Search);
    }

    return (
        <div className="app">
            <h1>Movie Land</h1>
        </div>
    );
}

export default App;
