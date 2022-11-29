import './App.css';

import {movies} from "./movies";

import {useState} from "react";
import MoviePreview from "./MoviePreview";
import CurrentMovie from "./CurrentMovie";

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
                    /*
                    on the left side of your "attributes" is the name of the prop
                    on the right side of your "attributes" is the value that you are passing into that component
                     */
                    return (
                        <MoviePreview
                            key={movie.title}
                           film={movie}
                            updateFilm={setCurrentMovie}
                        ></MoviePreview>
                    )
                })
            }

           <CurrentMovie
               currentMovie={currentMovie}
           ></CurrentMovie>
        </div>
    );
}

export default App;
