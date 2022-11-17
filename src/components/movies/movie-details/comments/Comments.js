import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";

export const Comments = ({ comment, curId }) => {

    const onDeleteComment = async () => {
        await updateDoc(doc(database, 'movies', curId), {
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
                <button onClick={onDeleteComment}>Delete</button>
            </li>
        </ul>
    );
}