import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../Context/FeedbackContext";
import { useParams, useNavigate } from "react-router-dom";

export default function EditFeed() {

    const { posts, uptitle, upbody, setUptitle, setUpbody, handleUpdate } = useContext(FeedbackContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const post = posts.find(p => p.id === Number(id));
        if (post) {
            setUptitle(post.title);
            setUpbody(post.body);
        }
    }, [id, posts, setUptitle, setUpbody]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleUpdate(Number(id));
        navigate("/");
    };

    return (
        <div className="add-post">
            <h2>Edit Feedback</h2>
            <form id="add-post-form" onSubmit={onSubmit}>
                <input
                    id="title-input"
                    type="text"
                    placeholder="Title"
                    value={uptitle}
                    onChange={(e) => setUptitle(e.target.value)}
                />

                <textarea
                    id="body-input"
                    placeholder="Body"
                    value={upbody}
                    onChange={(e) => setUpbody(e.target.value)}
                ></textarea>

                <button id="submit-btn" type="submit">Update Post</button>
            </form>
        </div>
    );
}
