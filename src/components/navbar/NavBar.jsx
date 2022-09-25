import './navbar.css';
import Logo from '../../assets/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Search from '../search/Search';
import { useState } from 'react';

const NavBar = () => {
    const [changeCss, setChangeCss] = useState(false);
    const changeScrollCss = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 10){
            setChangeCss(true);
        }
        else  {
            setChangeCss(false);
        }
    }
    window.addEventListener('scroll',changeScrollCss)

    return (
    <div className={changeCss ? "primary-header-container-scroll" : "primary-header-container"}>
        <div className="primary-header">
            <a id="brand" href="/">
                <img src={Logo} alt="Netflix"></img>
            </a>
            <ul className="nav-list">
                <li><a href="/home">Home</a></li>
                <li><a href="/tvshows">TV Shows</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/latest" >New &amp; Popular</a></li>
                <li><a href="/my-list">My List</a></li>
            </ul>
            <div className="dropdown" id="hamburger-icon">
                <button className="mobile-list-item">Browse
                    <ArrowDropDownIcon/>
                </button>
                <div className="callout-arrow"></div>
                <div className="topbar"></div>
                <ul className="dropdown-menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/tvshows">TV Shows</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/latest" >New &amp; Popular</a></li>
                    <li><a href="/my-list">My List</a></li>
                </ul>
            </div>
            <div className="secondary-navigation">
                <div className="nav-element">
                    <Search />
                </div>
                <div className="nav-element">
                    <a href="#">Kids</a>
                </div>
                <div className="nav-element">
                    <NotificationsIcon />
                </div>
                <div className="nav-element">
                    <PersonIcon />
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default NavBar;