import { createContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())
                        || movie.genre.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        const q = query(collection(database, 'movies'), orderBy("timestamp", "desc"));
        onSnapshot(q, (data) => {
            setMovies(data.docs.map(item => {
                return { ...item.data(), id: item.id };
            }))
            setIsLoading(true);
        })
    }, []);

    return (
        <MovieContext.Provider value={{ movies, setMovies, currentMovie, setCurrentMovie, search, setSearch, searchedMovies, isLoading }}>
            {children}
        </MovieContext.Provider>
    );
}

