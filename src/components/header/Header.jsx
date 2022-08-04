import HeaderImage from './Avatar-2.png';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <video width="100%" height="700" controls>
                <source src="./Avatar2_Trailer.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}
 
export default Header;