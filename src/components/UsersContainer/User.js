import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, gmail} = user
    const navigate = useNavigate()

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>gmail: {gmail}</div>
            <button onClick={() => navigate(id.toString())}>Get Posts</button>
        </div>
    );
};

export {User};