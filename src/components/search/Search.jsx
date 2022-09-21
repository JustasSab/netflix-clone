import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [showInput, setShowInput] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    // const handleClick = () => {
    //     setSearchInput()
    // }
    return (
        <div className="searchBox">
            <button onClick={() => {setSearchInput(!false)}}>
                <SearchIcon />
            </button>
            <input type="text" onChange={handleChange} placeholder="Titles, people genres"/>
        </div> 
    );
}
 
export default Search;