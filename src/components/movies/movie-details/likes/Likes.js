import { updateDoc, doc, arrayRemove, arrayUnion } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";

export const Likes = ({ currentMovie, loggedUser }) => {
    const likeHandler = () => {
        if (currentMovie.likes?.includes(loggedUser.uid)) {
            updateDoc(doc(database, 'movies', currentMovie.id), {
                likes: arrayRemove(loggedUser.uid)
            })
                .then(() => {
                    console.log('unliked');
                })
                .catch((err) => {
                    alert(err.message);
                })
        } else {
            updateDoc(doc(database, 'movies', currentMovie.id), {
                likes: arrayUnion(loggedUser.uid)
            })
                .then(() => {
                    console.log('liked');
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    return (
        <i className={`fa fa-heart${!currentMovie.likes?.includes(loggedUser.uid) ? '-o' : ''} fa-lg`}
            style={{ cursor: 'pointer', color: currentMovie.likes?.includes(loggedUser.uid) ? 'red' : null }}
            onClick={likeHandler}>{currentMovie.likes ? currentMovie.likes.length : 0}</i>
    );
}