import {useEffect} from "react";

const API_URL = 'https://www.omdbapi.com/?apikey=8e92b44d';

const App = () => {
    useEffect(() => {

    }, []);

    const searchMovies = async (searchTerm) => {
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="App">

        </div>
    );
}

export default App;
