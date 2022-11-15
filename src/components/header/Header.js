import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const Header = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth)
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            alert(err.message);
        })
    }
    
    return (
        <header className="">
            <div className="navbar">
                <button className="navbar-menu-btn">
                    <span className="one" />
                    <span className="two" />
                    <span className="three" />
                </button>
                <Link to="/" className="navbar-brand">
                    <img src="./movie.png" alt="" />
                </Link>
                <nav className="">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-actions">
                    <form className="navbar-form">
                        <input
                            type="text"
                            name="search"
                            placeholder="I'm looking for..."
                            className="navbar-form-search"
                        />
                        <button className="navbar-form-btn">
                            
                        </button>
                        <button className="navbar-form-close">
                            
                        </button>
                    </form>
                    <button className="navbar-search-btn">
                    </button>
                    <Link to="/login" className="navbar-signin">
                        <span>Login</span>
                    </Link>
                    <Link to="/register" className="navbar-signin">
                        <span>Register</span>
                    </Link>
                    <Link to="#" className="navbar-signin" onClick={onLogout}>
                        <span>Logout</span>
                    </Link>
                    <Link to="/create" className="navbar-signin">
                        <span>Create Movie</span>
                    </Link>
                    <Link to="/mymovies" className="navbar-signin">
                        <span>My Movies</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}