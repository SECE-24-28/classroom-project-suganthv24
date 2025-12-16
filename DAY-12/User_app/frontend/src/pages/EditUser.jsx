import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EditUser() {
    const { name, email, password, setName, setEmail, setPassword, users, handleEditUser } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = users.find(u => u._id === id);
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
        }
    }, [id, users, setName, setEmail, setPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleEditUser(id);
        navigate("/");
    }
    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}