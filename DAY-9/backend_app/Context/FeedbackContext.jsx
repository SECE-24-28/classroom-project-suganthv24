import React, { createContext, useState, useEffect } from "react";
import api from "../api/post";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [posts, setposts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        const getFeedback = async () => {
        try {
            const res = await api.get("/feedback");
            setposts(res.data);      
            console.log(res.data);
        } catch (err) {
            console.log("Error fetching feedback:", err);
        }
        };
        getFeedback();
    }, []);

    //to search the data
    useEffect(() => {
        const searchFeedback = () => {
        const result = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
        setSearchResult(result);
        };
        searchFeedback();
    }, [posts,search]);

    //to add the data
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title,
            body,
            datetime: new Date().toISOString()
        };
        const res = await api.post("/feedback", newPost);
        setposts([...posts, res.data]);
        setTitle("");
        setBody("");
    };


    return (
        <FeedbackContext.Provider
            value={{
                posts,
                search,
                searchResult,
                setSearch,
                title,
                body,
                setTitle,
                setBody,
                handleSubmit
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
