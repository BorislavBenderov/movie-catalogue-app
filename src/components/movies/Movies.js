import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { MovieCard } from './MovieCard';
import MC from '../../assets/movie-catalogue.jpg';

export const Movies = () => {
    const { movies, searchedMovies } = useContext(MovieContext);
    
    return (
        <>
            <section className="banner">
                <div className="banner-card">
                    <img
                        src={MC}
                        className="banner-img"
                        alt=""
                    />
                    <div className="card-content">
                        <h2 className="card-title">Movie Catalogue</h2>
                    </div>
                </div>
            </section>
            <section className="movies">
                <div className="movies-grid">
                    {movies.length > 0
                        ? searchedMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                        : <p>No movies in database!</p>}
                </div>
            </section>
        </>
    );
}