import './navbar.css';
import Logo from '../../assets/logo.png';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

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

            <div className="secondary-navigation">
                <div className="nav-element">
                    <FaSearch />
                </div>
                <div className="nav-element">
                    <a href="/">Kids</a>
                </div>
                <div className="nav-element">
                    <FaBell />
                </div>
                <div className="nav-element">
                    <FaUser />
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default NavBar;