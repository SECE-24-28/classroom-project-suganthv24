import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Trash2, SquarePen ,EyeOff} from 'lucide-react';

export default function Home() {
    const { users, handleEditUser, handleDeleteUser } = useContext(UserContext);
    return (
        <>
            <div id="user-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}    <button className='eye-btn'><EyeOff/></button></td>
                                <td id="actions">
                                    <Link to={`/edit/${user._id}`}><button className='btn btn-edit'><SquarePen/></button></Link>
                                    <button className='btn btn-delete' onClick={() => handleDeleteUser(user._id)}><Trash2 /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}