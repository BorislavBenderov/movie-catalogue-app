import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { MovieContext } from '../../../contexts/MovieContext';
import { MovieCard } from '../MovieCard';
import MC from '../../../assets/movie-catalogue.jpg';

export const MyMovies = () => {
    const { searchedMovies } = useContext(MovieContext);
    const { loggedUser } = useContext(AuthContext);

    let myMovies = [];

    if (loggedUser) {
        myMovies = searchedMovies.filter(movie => movie.ownerId === loggedUser.uid);
    }

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
                        <h2 className="card-title">My Movies</h2>
                    </div>
                </div>
            </section>
            <section className="movies">
                <div className="movies-grid">
                    {myMovies.length > 0
                        ? myMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                        : <p>No movies in database!</p>}
                </div>
            </section>
        </>
    );
}