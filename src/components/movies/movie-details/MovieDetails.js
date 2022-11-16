import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { database } from '../../../firebaseConfig';
import './MovieDetails.css';

export const MovieDetails = () => {
    const [currentMovie, setCurrentMovie] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        onSnapshot(doc(database, 'movies', movieId), (snapshot) => {
            setCurrentMovie({ ...snapshot.data(), id: snapshot.id });
        })
    }, []);

    return (
        <div className="card">
            <section className="movie_image">
                <img
                    className="movie_poster"
                    src={currentMovie.imageUrl}
                    alt="As Above So Below"
                />
            </section>
            <section className="center">
                <div className="about_movie">
                    <h3>{currentMovie.title}</h3>
                    <div className="movie_info">
                        <p>{currentMovie.year}</p>
                        <p>Rating: {currentMovie.rating}</p>
                        <p>{currentMovie.genre}</p>
                    </div>
                    <div className="movie_desc">
                        <p>
                            {currentMovie.description}
                        </p>
                    </div>
                    <div className="users-buttons">
                    <Link to={`/edit/${currentMovie.id}`}>Edit</Link>
                    <Link to={`/edit/${currentMovie.id}`}>Delete</Link>
                    </div>
                </div>
            </section>
            <svg
                className="wavy"
                viewBox="0 0 500 500"
                preserveAspectRatio="xMinYMin meet"
            >
                <path
                    d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                    style={{ stroke: "none" }}
                />
            </svg>

        </div>
    );
}