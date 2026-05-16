



function MovieCard({movie}){

    function onFavoriteClick(){
        // Logic to add movie to favorites
        alert(`${movie.title} added to favorites!`);
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={`${movie.title} poster`} />
                <div className="movie-overlay">
                    <button classNamme="favorite-btn" onClick={onFavoriteClick} >💖</button>
                </div>
        </div>
         <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

        </div>

       
    )
}

export default MovieCard;