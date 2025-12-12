import { useContext } from "react";
import { FeedbackContext } from "../../Context/FeedbackContext.jsx";

export default function SearchBox(){
	 const { search,setSearch } = useContext(FeedbackContext);

    return(
        <input 
			type="text" 
			id="search"
			placeholder="Search..." 
			value={search} 
			onChange={(e)=>setSearch(e.target.value)} 
		/>
    )
}