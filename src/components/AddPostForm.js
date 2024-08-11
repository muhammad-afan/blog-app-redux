import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../redux/slices/postSlice";
import { selectAllUsers } from "../redux/slices/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                // postAdded({
                //     id: nanoid(),
                //     title,
                //     content,
                // })
                postAdded(title, content, userId)
            );
            setTitle("");
            setContent("");
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a new Post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    name="postAuthor"
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value={""}></option>
                    {userOptions}
                </select>
                <label htmlFor="postTitle">Post Content:</label>
                <textarea
                    type="text"
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
