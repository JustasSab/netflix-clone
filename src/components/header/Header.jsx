import TrailerLogo from './assets/Narcos-Logo.png';
import TrailerVideo from './assets/Narcos.mp4';
import './header.css';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { useState} from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Header = () => {
    const [audioSwitcher, setAudioSwitcher] = useState(true);
    const handleChange = () => {
        return setAudioSwitcher(!audioSwitcher);
      };

    return (
        <div className="header">
            <video id="videoTrailer" muted={audioSwitcher} autoPlay loop>
                <source src={TrailerVideo} type="video/mp4"/>
            </video>
            <div className="trailer-content">
                <img src={TrailerLogo} alt="TrailerTitle" />
                <button className="btn" id="PlayBtn" onClick="myFunction()">
                    <FaPlay/> <span>Play</span>
                </button>
                <button className="btn" id="InfoButton" onClick="myFunction()">
                    <FaInfoCircle/> <span>More Info</span> 
                </button>
                <button 
                    id="muteButton"
                    onClick={() => handleChange(true)} 
                    className={( audioSwitcher ? "active" : "")}>
                    { audioSwitcher ? <VolumeOffIcon/> : <VolumeUpIcon/>}
                </button>
            </div>
        </div>
    );
}
 
export default Header;