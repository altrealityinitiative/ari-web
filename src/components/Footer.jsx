import "./Footer.css";
import icxrLogo from "../assets/images/icxr-member-footer.png";

function Footer() {
    return (
        <footer className="footer">
        <img
            src={icxrLogo}
            alt="A Member of ICXR"
            className="footer-logo"
        />
            <p>&copy; 2024 Alternate Reality Initiative. All rights reserved.</p>
            <p>
                Follow us on {" "}
                <a href="https://instagram.com/AlternateReality" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
        </footer>
    );
}

export default Footer;
