import './App.css';

import {movies} from "./movies";

import {useState} from "react";

function App() {
    // this is the useState hook
    const [currentMovie, setCurrentMovie] = useState(null);
    // useState is a function useState()
    // useState returns an array of values
    // the first value is the value you are saving
    // the second value is the function to change the value that you are saving

    return (
        <div>
            {
                movies.map((movie) => {
                    /*
                    <div className={"movie"}> is the same as <div className="movie">
                     */
                    return (
                        <div className="movie" key={movie.title} onClick={() => {
                            setCurrentMovie(movie)
                        }}>
                            <img src={movie.posterUrl} alt={movie.title}/>
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                        </div>
                    )
                })
            }

            {/*    display the current movie saved in state  */}
            {
                currentMovie ?
                    <div className={"movie"}>
                        <img src={currentMovie.posterUrl} alt={currentMovie.title}/>
                        <p>{currentMovie.title}</p>
                        <p>{currentMovie.rating}</p>
                        <p>{currentMovie.director}</p>
                        <p>{currentMovie.releaseYear}</p>
                        <p>{currentMovie.description}</p>
                    </div>
                    : <p>movie is not selected</p>
            }
        </div>
    );
}

export default App;
