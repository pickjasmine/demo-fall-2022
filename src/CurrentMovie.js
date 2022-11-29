const CurrentMovie = (props) => {
    const {currentMovie} = props;

    if (currentMovie) {
        return (
            <div className={"movie"}>
                <img src={currentMovie.posterUrl} alt={currentMovie.title}/>
                <p>{currentMovie.title}</p>
                <p>{currentMovie.rating}</p>
                <p>{currentMovie.director}</p>
                <p>{currentMovie.releaseYear}</p>
                <p>{currentMovie.description}</p>
            </div>
        )
    }

    return (
        <div>
            <p>movie is not selected</p>
        </div>
    )
}

export default CurrentMovie;

/*    display the current movie saved in state
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

 */