import React, { createContext, useState, useEffect } from "react";
import api from "../api/post";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [uptitle, setUptitle] = useState("");
    const [upbody, setUpbody] = useState("");

    // Fetch feedback
    useEffect(() => {
        const getFeedback = async () => {
            try {
                const res = await api.get("/feedback");
                setPosts(res.data);
            } catch (err) {
                console.log("Error fetching feedback:", err);
            }
        };
        getFeedback();
    }, []);

    // Search feature
    useEffect(() => {
        const searchFeedback = () => {
            const result = posts.filter((post) =>
                (post.title ?? "").toLowerCase().includes(search.toLowerCase())
            );
            setSearchResult(result.reverse());
        };
        searchFeedback();
    }, [posts, search]);


    // Add new post
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            id: posts.length + 1,
            title,
            body,
            datetime: new Date().toISOString(),
        };

        const res = await api.post("/feedback", newPost);

        setPosts([...posts, res.data]);
        setTitle("");
        setBody("");
    };

    // Update post
    const handleUpdate = async (id) => {
        const updatedPost = {
            id,
            title: uptitle,
            body: upbody,
            datetime: new Date().toISOString(),
        };

        const res = await api.put(`/feedback/${id}`, updatedPost);

        setPosts(posts.map((p) => (p.id === id ? res.data : p)));
        setUptitle("");
        setUpbody("");
    };


    // Delete post
    const handleDelete = async (id) => {
        await api.delete(`/feedback/${id}`);
        setPosts(posts.filter((p) => p.id !== id));
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
                handleSubmit,
                handleUpdate,
                handleDelete,
                uptitle,
                upbody,
                setUptitle,
                setUpbody,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
