import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/slices/usersSlice";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => String(user.id) === String(userId));

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;