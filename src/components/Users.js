import {User} from "./User"
import {useEffect, useState} from "react";
const Users = () => {
    const [users, setUsers] = useState([])
    //const users = state[0]
    //const setUsers = state[1]
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(items => setUsers(items))
    })
    return (
        <div>
            {users.map(user => <User key={user.id} userASD={user}/>)}
        </div>
    );
};

export {Users};