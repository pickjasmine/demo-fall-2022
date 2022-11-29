// some styles imported here

const MoviePreview = (props) => {
    const {film, updateFilm} = props;

    return (
        <div className="movie" onClick={() => {
            updateFilm(film)
        }}>
            <img src={film.posterUrl} alt={film.title}/>
            <p>{film.title}</p>
            <p>{film.rating}</p>
        </div>
    )
}

export default MoviePreview;

