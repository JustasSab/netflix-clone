import TrailerLogo from './assets/Narcos-Logo.png';
import TrailerVideo from './assets/Narcos.mp4';
import './header.css';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <video id="videoTrailer" autoPlay muted loop>
                <source src={TrailerVideo} type="video/mp4"/>
            </video>
            <div class="trailer-content">
                <img src={TrailerLogo} alt="TrailerTitle" />
                <button className="btn" id="PlayBtn" onClick="myFunction()">
                    <FaPlay/> <span>Play</span>
                </button>
                <button className="btn" id="InfoButton" onClick="myFunction()">
                    <FaInfoCircle/> <span>More Info</span> 
                </button>
            </div>
        </div>
    );
}
 
export default Header;