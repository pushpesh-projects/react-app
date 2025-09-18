import MovieCard from "./MovieCard";
import { movies } from "../data/movies";
import "../css/movie.css";

const MovieList = () => (
  <div className="movie-list-container">
    <h1>List of movies</h1>
    <div className="movie-card-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
);

export default MovieList;
