import './App.css';

import {movies} from "./movies";

function App() {

    return (
        <div>
            {
                movies.map((movie) => {
                    /*
                    <div className={"movie"}> is the same as <div className="movie">
                     */
                    return (
                        <div className={"movie"} key={movie.title}>
                            <img src={movie.posterUrl} alt={movie.title}/>
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
/*
{
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "rating": 9.3,
        "director": "Frank Darabont",
        "releaseYear": 1994,
        "categories": [
            "drama"
        ]
    },
 */
