import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { MovieContext } from "../../../../contexts/MovieContext";
import { database } from "../../../../firebaseConfig";

export const Comments = ({ comment }) => {
    const { currentMovie } = useContext(MovieContext);
    const { loggedUser } = useContext(AuthContext);
    
    let ownerOfComment = null;

    if (loggedUser) {
        ownerOfComment = loggedUser.uid === comment.ownerId;
    }

    const onDeleteComment = async () => {
        await updateDoc(doc(database, 'movies', currentMovie.id), {
            comments: arrayRemove(comment)
        })
    }

    return (
        <ul className="comments-section">
            <li className="comments-box">
                <h6>
                    {comment.email}
                </h6>
                <p>
                    {comment.comment}
                </p>
                {ownerOfComment
                    ? <button onClick={onDeleteComment}>Delete</button>
                    : ''}
            </li>
        </ul>
    );
}