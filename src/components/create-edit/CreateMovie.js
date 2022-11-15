export const CreateMovie = () => {
    return (
        <form className="auth">
            <h3>Add Movie</h3>
            <label htmlFor="title"></label>
            <input type="text" placeholder="Title" id="title" name="title" />
            <label htmlFor="description"></label>
            <input type="text" placeholder="Description" id="description" name="description" />
            <label htmlFor="imageUrl"></label>
            <input type="text" placeholder="Image" id="imageUrl" name="imageUrl" />
            <label htmlFor="genre"></label>
            <input type="text" placeholder="Genre" id="genre" name="genre" />
            <label htmlFor="year"></label>
            <input type="text" placeholder="Year" id="year" name="year" />
            <label htmlFor="rating"></label>
            <input type="text" placeholder="Rating" id="rating" name="rating" />
            <button type="submit">Add</button>
        </form>
    );
}