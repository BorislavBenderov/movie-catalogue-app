import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { database } from "../../../../firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

export const AddComment = ({ movieId }) => {
    const [input, setInput] = useState('');
    const { loggedUser } = useContext(AuthContext);

    const onComment = (e) => {
        e.preventDefault();

        if (input === '') {
            alert('Please enter a valid comment');
            return;
        }

        updateDoc(doc(database, 'movies', movieId), {
            comments: arrayUnion({
                comment: input,
                ownerId: loggedUser.uid,
                id: uuidv4(),
                email: loggedUser.email,
            })
        })
            .then(() => {
                setInput('');
            })
            .catch((err) => {
                alert(err.message);
            });  
    }

    return (
        <div className="addcomment-box">
            <p>Leave a Comment</p>
            <form className="comment-form" onSubmit={onComment}>
                <textarea
                    rows="10"
                    type="text"
                    placeholder="Add a comment"
                    name="comment"
                    id="comment"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-outline-primary btn-sm" type="submit">Add</button>
            </form>
        </div>
    );
}