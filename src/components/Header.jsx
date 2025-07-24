import logo from "../../public/assets/Khetify-logo.png"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div className="navbar-container">
            <div className="nav-left">
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1752729663/Khetify_logo_square_frhx9m.png" alt="can't load logo" height={80} className="khetify-logo" />
            </div>
            <div className="nav-mid">
                <ul className="nav-mid-list">
                    <li className="text-white text-decoration-none"><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
                    <li>About Us</li>
                    <li>Shop</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="nav-right">
                <ul className="nav-right-list">
                    <li className="bi bi-globe"></li>
                    <li className="bi bi-person-circle"></li>
                </ul>
            </div>
        </div>
    );
};












export default Header;