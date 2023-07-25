import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

import './Navbar.styles.css'

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='constant'>
                        <img src={logo} alt="logo" className='logo'/>
                        <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
                            JetSetGlobe
                        </Link>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/details" className="nav-links" onClick={closeMobileMenu}>
                                Admin
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/AboutAnushka" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                About Anushka
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar