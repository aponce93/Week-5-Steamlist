import React, { useEffect, useState } from "react";
import "./Movies.css";

const TMDB_API_KEY = "b7bb72475a54092fddf140269ab0fa6c"; 
const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

function Movies() {
  const [movies, setMovies] = useState([]);

  // Fetch data from TMDB API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(TMDB_API_URL);
        const data = await response.json();
        setMovies(data.results); // Store the movie data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
