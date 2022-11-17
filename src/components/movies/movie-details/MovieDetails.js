import { deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MovieContext } from '../../../contexts/MovieContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { database } from '../../../firebaseConfig';
import { Likes } from './likes/Likes';
import { Comments } from './comments/Comments';
import './MovieDetails.css';
import { AddComment } from './comments/AddComment';

export const MovieDetails = () => {
    const navigate = useNavigate();
    const { currentMovie, setCurrentMovie } = useContext(MovieContext);
    const { loggedUser } = useContext(AuthContext);
    const { movieId } = useParams();

    

    let isOwner = null;

    if (loggedUser) {
        isOwner = currentMovie.ownerId === loggedUser.uid;
    }
    
    useEffect(() => {
        onSnapshot(doc(database, 'movies', movieId), (snapshot) => {
            setCurrentMovie({ ...snapshot.data(), id: snapshot.id });
        })
    }, []);

    const onDelete = (id, e) => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            e.preventDefault();

            deleteDoc(doc(database, 'movies', id))
                .then(() => {
                    navigate('/');
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    return (
        <>
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
                        {isOwner
                            ? <div className="users-buttons">
                                <Link to={`/edit/${currentMovie.id}`}>Edit</Link>
                                <Link to={'#'} onClick={(e) => onDelete(movieId, e)}>Delete</Link>
                            </div>
                            : ''}
                        <div className='likes'>
                            {loggedUser
                                ? <Likes currentMovie={currentMovie} loggedUser={loggedUser} />
                                : <i>Likes: {currentMovie.likes ? currentMovie.likes.length : 0}</i>}
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
            <div className="comments">
                <h4 className="comments-title">
                    Comments
                </h4>
                {currentMovie.comments && currentMovie.comments.length > 0
                    ? currentMovie.comments.map(comment => <Comments key={comment.id} comment={comment} />)
                    : <p>No comments in database!</p>}
            </div>
            {loggedUser
                ? <AddComment movieId={currentMovie.id} />
                : ''}           
        </>
    );
}