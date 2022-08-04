import TrailerTitle from './assets/avatar-logo.png';
import Trailer from './assets/Avatar2_Trailer.mp4';
import './header.css';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <video id="videoTrailer" autoPlay muted loop>
                <source src={Trailer} type="video/mp4"/>
            </video>
            <div class="content">
                <img src={TrailerTitle} alt="TrailerTitle" />
                <button className="btn" id="PlayBtn" onClick="myFunction()">
                    <FaPlay/> <span>Play</span>
                </button>
                <button className="btn" id="InfoButton" onClick="myFunction()">
                    <FaInfoCircle/>More Info
                </button>
            </div>
        </div>
    );
}
 
export default Header;