import { GitHub } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'> 
            <ul className='footer-links'>
                <li>
                    <a href="#"><span>Audio Description</span></a>
                </li>
                <li>
                    <a href="#"><span>Help Center</span></a>
                </li>
                <li>
                    <a href="#"><span>Gift Cards</span></a>
                </li>
                <li>
                    <a href="#"><span>Media Center</span></a>
                </li>
                <li>
                    <a href="#"><span>Investor Relations</span></a>
                </li>
                <li>
                    <a href="#"><span>Jobs</span></a>
                </li>
                <li>
                    <a href="#"><span>Terms of Use</span></a>
                </li>
                <li>
                    <a href="#"><span>Privacy</span></a>
                </li>
                <li>
                    <a href="#"><span>Legal Notices</span></a>
                </li>
                <li>
                    <a href="#"><span>Cookie Preferences</span></a>
                </li>
                <li>
                    <a href="#"><span>Corporate Information</span></a>
                </li>
                <li>
                    <a href="#"><span>Contact Us</span></a>
                </li>
            </ul>
            <div class="footer-service">
                <button class="service-code">Service Code</button>
            </div>
            <div>
                <GitHub />
                <a className='footer-copyright' href="https://github.com/JustasSab"> JustasSab &#169;</a>
            </div>
        </footer>
    );
}

export default Footer;