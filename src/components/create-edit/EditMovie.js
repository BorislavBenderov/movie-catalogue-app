import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { database } from "../../firebaseConfig";

export const EditMovie = () => {
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { currentMovie } = useContext(MovieContext);
    const [values, setValues] = useState({
        title: currentMovie.title,
        description: currentMovie.description,
        imageUrl: currentMovie.imageUrl,
        genre: currentMovie.genre,
        year: currentMovie.year,
        rating: currentMovie.rating
    })
    
    const changeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    }
    
    const onEdit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const genre = formData.get('genre');
        const year = Number(formData.get('year'));
        const rating = Number(formData.get('rating'));

        if (title === '' || description === '' || imageUrl === '' || genre === '' || year === '' || rating === '') {
            setErr('Please fill all the fields');
            return;
        }

        if (year !== Number(year) || rating !== Number(rating)) {
            setErr('Please add a number for year/rating!');
            return;
        }

        const movieData = {
            title,
            description,
            imageUrl,
            genre,
            year: Number(year),
            rating: Number(rating),
        };

        setLoading(true);

        updateDoc(doc(database, 'movies', currentMovie.id), movieData)
        .then(() => {
            navigate(`/movies/${currentMovie.id}`);
            setLoading(false);
        })
        .catch((err) => {
            setErr(err.message);
            setLoading(false);
        })
    }

    return (
        <form className="auth" onSubmit={onEdit}>
            <h3>Edit Movie</h3>
            <label htmlFor="title"></label>
            <input type="text" placeholder="Title" id="title" name="title" value={values.title} onChange={changeHandler}/>
            <label htmlFor="description"></label>
            <textarea type="text" placeholder="Description" id="description" name="description" value={values.description} onChange={changeHandler}/>
            <label htmlFor="imageUrl"></label>
            <input type="text" placeholder="Image" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler}/>
            <label htmlFor="genre"></label>
            <input type="text" placeholder="Genre" id="genre" name="genre" value={values.genre} onChange={changeHandler}/>
            <label htmlFor="year"></label>
            <input type="text" placeholder="Year" id="year" name="year" value={values.year} onChange={changeHandler}/>
            <label htmlFor="rating"></label>
            <input type="text" placeholder="Rating" id="rating" name="rating" value={values.rating} onChange={changeHandler}/>
            <button type="submit">{loading ? "Loading..." : "Edit"}</button>
            <p className="errors">{err}</p>
        </form>
    );
}