import { useContext } from "react";
import { FeedbackContext } from "../../Context/FeedbackContext.jsx";

export default function AddPost(){
       const { title,body,setTitle,setBody,handleSubmit} = useContext(FeedbackContext);
    
    return(
        <div className="add-post">
            <h2>Add Post</h2>
            <form id="add-post-form" onSubmit={handleSubmit}>
                <input  id="title-input" 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea id="body-input" 
                          placeholder="Body" 
                          value={body} 
                          onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button id="submit-btn" type="submit">Add Post</button>
            </form>
        </div>
    )
}