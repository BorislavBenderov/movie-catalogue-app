import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { MovieCard } from './MovieCard';

export const Movies = () => {
    const { movies } = useContext(MovieContext);
    
    return (
        <>
        <section className="banner">
            <div className="banner-card">
                <img
                    src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/9bba82e4-cc02-4c2d-9905-bba6f549ae11/9ae78f4f-7db4-4add-ac93-26b40fad0da0/1280x720/match/image.jpg"
                    className="banner-img"
                    alt=""
                />
                <div className="card-content">
                    <h2 className="card-title">Movie Catalogue</h2>
                </div>
            </div>
        </section>
        <section className="movies">
            {movies.length > 0 
            ? movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            : <p>No movies in database!</p>}          
            <button className="load-more">LOAD MORE</button>
        </section>
        </>
    );
}