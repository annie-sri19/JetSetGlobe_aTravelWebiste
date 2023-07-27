import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.styles.css'

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <NavLink to="/">
                        <h2>
                            <span>J</span>et
                            <span>S</span>et
                            <span>G</span>lobe
                        </h2>
                    </NavLink>
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/details">Admin</NavLink>
                        </li>
                        <li>
                        <a href="#services">services</a>
                        </li>
                        <li>
                        <NavLink to="/AboutAnushka" >About Anushka</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                        <a href="https://www.linkedin.com/company/travelopia/?originalSubdomain=in" target="_thapa">
                            <FaLinkedinIn className="LinkedIn" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/Travelopiagroup/" target="_thapa">
                            <FaInstagramSquare className="instagram" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/@travelopia1" target="_thapa">
                            <FaYoutubeSquare className="youtube" />
                        </a>
                        </li>
                    </ul>
                </div>
                {/* hamburget menu start  */}
                <div className="hamburger-menu" >
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar