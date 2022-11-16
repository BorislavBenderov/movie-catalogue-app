import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <>
            <Link to={movie.id}>                
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src={movie.imageUrl}
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="rating">
                                    <span>{movie.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{movie.title}</h3>
                            <div className="card-info">
                                <span className="genre">{movie.genre}</span>
                                <span className="year">{movie.year}</span>
                            </div>
                        </div>
                    </div>
            </Link>
        </>
    );
}