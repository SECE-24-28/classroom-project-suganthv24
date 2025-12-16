import { createContext } from "react";
import api from "../api/user";
import { useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [users,setUsers] = useState([]);

    //getting all users from the api
    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await api.get("/");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    getAllUsers();
    },[]);

    const handleAddUser = async () => {
        try {
            const NewUser = {name, email, password};
            const response = await api.post("/", NewUser);
            setUsers([...users, response.data]);
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    const handleEditUser = async (_id) => {
        try {
            const NewUser = {name, email, password};
            const response = await api.put(`/${_id}`, NewUser);
            setUsers(users.map(user => user._id === _id ? response.data : user));
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteUser = async (_id) => {
        try {
            await api.delete(`/${_id}`);
            setUsers(users.filter(user => user._id !== _id));
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <UserContext.Provider value={
            {
                name,
                email,
                password,
                setName,
                setEmail,
                setPassword,
                users ,
                setUsers,
                handleAddUser,
                handleEditUser,
                handleDeleteUser           
            }
        }>
            {children}
        </UserContext.Provider>
    );
};