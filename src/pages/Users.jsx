import { useContext } from "react";
import { formContext } from "../UserContext";

const Users = () => {
    const { createUser } = useContext(formContext)
    const { username, email, imgUrl } = createUser;

    const userL = Object.keys(createUser).length
    return (
        <>
            <pre>
                
                <h3>Users</h3>
                <h1>{userL}{username}</h1>
                <h1>{email}</h1>
                <img src={imgUrl} />
            </pre>

        </>
    );
}

export default Users;