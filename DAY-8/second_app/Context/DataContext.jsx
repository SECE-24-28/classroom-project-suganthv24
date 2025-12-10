import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [count, setCount] = useState([]);

    useEffect(() => {
        setCount([
            { id: 1, name: "Suganth", fee: false },
            { id: 2, name: "Sathish", fee: true },
            { id: 3, name: "Surya", fee: false }
        ]);
    }, []);

    const [searchQuery, setSearchQuery] = useState("");
    const [name, setName] = useState("");

    const handleDelete = (id) => {
        setCount(count.filter((ls) => ls.id !== id));
    };

    const handleCheck = (id) => {
        setCount(
            count.map((ls) =>
                ls.id === id ? { ...ls, fee: !ls.fee } : ls
            )
        );
    };

    const handleAdd = () => {
        if (!name.trim()) return;

        setCount([...count, { id: count.length + 1, name: name, fee: false }])
        setName("")
    }

    const filteredStudents = count.filter((ls) =>
        ls.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DataContext.Provider
            value={{
                count,
                searchQuery,
                name,
                setName,
                setSearchQuery,
                handleAdd,
                handleDelete,
                handleCheck,
                filteredStudents
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
