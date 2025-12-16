import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";

export default function AddUser() {
    const { name, email, password, setName, setEmail, setPassword, handleAddUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleAddUser();
        navigate("/");
    }

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}