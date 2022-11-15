export const Header = () => {
    return (
        <header className="">
            <div className="navbar">
                <button className="navbar-menu-btn">
                    <span className="one" />
                    <span className="two" />
                    <span className="three" />
                </button>
                <a href="#" className="navbar-brand">
                    <img src="./movie.png" alt="" />
                </a>
                <nav className="">
                    <ul className="navbar-nav">
                        <li>
                            {" "}
                            <a href="#" className="navbar-link">
                                Home
                            </a>{" "}
                        </li>
                    </ul>
                </nav>
                <div className="navbar-actions">
                    <form action="#" className="navbar-form">
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
                    <a href="#" className="navbar-signin">
                        <span>Login</span>
                    </a>
                    <a href="#" className="navbar-signin">
                        <span>Register</span>
                    </a>
                    <a href="#" className="navbar-signin">
                        <span>Logout</span>
                    </a>
                    <a href="#" className="navbar-signin">
                        <span>Create Movie</span>
                    </a>
                    <a href="#" className="navbar-signin">
                        <span>My Movies</span>
                    </a>
                </div>
            </div>
        </header>
    );
}