import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { SearchBar } from './search-bar/SearchBar';

export const Header = () => {
    const { auth, loggedUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

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
                <div className="navbar-nav">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                </div>
                <div className="navbar-actions">
                    {pathname === '/' || pathname === '/mymovies'
                        ? <SearchBar />
                        : ''}
                    {!loggedUser
                        ? <>
                            <Link to="/login" className="navbar-signin">
                                <span>Login</span>
                            </Link>
                            <Link to="/register" className="navbar-signin">
                                <span>Register</span>
                            </Link> </>
                        : <> <span>{loggedUser.email}</span>
                            <Link to="/mymovies" className="navbar-signin">
                                <span>My Movies</span>
                            </Link>
                            <Link to="/create" className="navbar-signin">
                                <span>Create Movie</span>
                            </Link>
                            <Link to="#" className="navbar-signin" onClick={onLogout}>
                                <span>Logout</span>
                            </Link> </>}
                </div>
            </div>
        </header>
    );
}