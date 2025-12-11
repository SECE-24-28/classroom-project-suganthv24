import { useContext } from "react";
import { FeedbackContext } from "../../Context/FeedbackContext.jsx";
import SearchBox from "./SearchBox";

export default function Feedbacks(){
       const { searchResult} = useContext(FeedbackContext);
    
    return(
        <>
            <SearchBox/>
        	{
                searchResult.map((p)=>
                <div id="post" key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <small>{p.datetime}</small>
                </div>)
            }
        </>
    )
}