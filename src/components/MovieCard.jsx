const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <p>{movie.title}</p>
    <p>
      Year: {movie.year}, Rating: {movie.rating}, Length: {movie.runtime}
    </p>
  </div>
);

export default MovieCard;
