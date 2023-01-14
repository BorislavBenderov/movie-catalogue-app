import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { useState } from "react";

export const CreateMovie = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onCreate = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    const genre = formData.get("genre");
    const year = Number(formData.get("year"));
    const rating = Number(formData.get("rating"));

    if (
      title === "" ||
      description === "" ||
      imageUrl === "" ||
      genre === "" ||
      year === "" ||
      rating === ""
    ) {
      setErr("Please fill all the fields");
      return;
    }

    if (year !== Number(year) || rating !== Number(rating)) {
      setErr("Please add a number for year/rating!");
      return;
    }

    const movieData = {
      title,
      description,
      imageUrl,
      genre,
      year: Number(year),
      rating: Number(rating),
      timestamp: serverTimestamp(),
      ownerId: loggedUser.uid,
      likes: [],
      comments: [],
    };

    setLoading(true);

    addDoc(collection(database, "movies"), movieData)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  };

  return (
    <form className="auth" onSubmit={onCreate}>
      <h3>Add Movie</h3>
      <label htmlFor="title"></label>
      <input type="text" placeholder="Title" id="title" name="title" />
      <label htmlFor="description"></label>
      <textarea
        type="text"
        placeholder="Description"
        id="description"
        name="description"
      />
      <label htmlFor="imageUrl"></label>
      <input type="text" placeholder="Image" id="imageUrl" name="imageUrl" />
      <label htmlFor="genre"></label>
      <input type="text" placeholder="Genre" id="genre" name="genre" />
      <label htmlFor="year"></label>
      <input type="text" placeholder="Year" id="year" name="year" />
      <label htmlFor="rating"></label>
      <input type="text" placeholder="Rating" id="rating" name="rating" />
      <button type="submit">{loading ? "Loading..." : "Add"}</button>
      <p className="errors">{err}</p>
    </form>
  );
};
