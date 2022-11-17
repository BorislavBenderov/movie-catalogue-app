import { useContext } from "react";
import { MovieContext } from '../../../contexts/MovieContext';

export const SearchBar = () => {
    const { search, setSearch } = useContext(MovieContext);
    
    return (
        <form className="navbar-form">
            <input
                type="text"
                name="search"
                placeholder="I'm looking for..."
                className="navbar-form-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}