import './navbar.css';
import Logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const NavBar = () => {
    return (
    <div className="primary-header-container">
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
            <div class="dropdown" id="hamburger-icon">
                <button class="mobile-list-item">Browse
                    <ArrowDropDownIcon/>
                </button>
                <div class="callout-arrow"></div>
                <div class="topbar"></div>
                <ul class="dropdown-menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/tvshows">TV Shows</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/latest" >New &amp; Popular</a></li>
                    <li><a href="/my-list">My List</a></li>
                </ul>
            </div>
            <div className="secondary-navigation">
                <div className="nav-element">
                    <SearchIcon />
                </div>
                <div className="nav-element">
                    <a href="/">Kids</a>
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