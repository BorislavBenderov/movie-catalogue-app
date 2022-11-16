export const Comments = ({comment}) => {
    return (
        <ul className="comments-section">
            <li className="comments-box">
                <h6>
                    {comment.email}
                </h6>
                <p>
                {comment.comment}
                </p>
            </li>
        </ul>
    );
}