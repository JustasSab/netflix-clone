import { useEffect, useState } from 'react';
import axios from "../../axios";
import './row.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <div className='row__poster'>
                        <img 
                            src={`${base_url}${movie.poster_path}`} 
                            alt={movie.original_title} 
                        />
                        <div className='poster_card'>
                            <button><PlayCircleIcon /></button>
                            <button><AddIcon /></button>
                            <button><ThumbUpOutlinedIcon /></button>
                            <button><KeyboardArrowDownOutlinedIcon /></button>
                            <div>
                                <span>{movie.vote_average}</span><br></br>
                                <span>{movie.release_date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Row;