import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { database } from "../../../../firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

export const AddComment = ({ movieId }) => {
    const { loggedUser } = useContext(AuthContext);

    const onComment = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const comment = formData.get('comment');

        if (comment === '') {
            alert('Please enter a valid comment');
            return;
        }

        updateDoc(doc(database, 'movies', movieId), {
            comments: arrayUnion({
                comment,
                ownerId: loggedUser.uid,
                id: uuidv4(),
                email: loggedUser.email,
            })
        })
            .then(() => {
                console.log('Comment created');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className="comment-form" onSubmit={onComment}>
            <input
                type="text"
                placeholder="Add a comment"
                name="comment"
                id="comment"
            />
            <button className="btn btn-outline-primary btn-sm" type="submit">Add</button>
        </form>
    );
}