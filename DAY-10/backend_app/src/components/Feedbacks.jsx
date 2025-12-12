import { useContext } from "react";
import { FeedbackContext } from "../../Context/FeedbackContext.jsx";
import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

export default function Feedbacks() {
    const { searchResult, handleDelete } = useContext(FeedbackContext);

    return (
        <>
            <SearchBox />
            {
                searchResult.map((p) =>
                    <div id="post" key={p.id} >
                        <Link to={`/editpost/${p.id}`}>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                            <small>{p.datetime}</small>
                        </Link>
                        <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
                    </div>)
            }
        </>
    )
}