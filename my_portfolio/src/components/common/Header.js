import React, { useState } from 'react';
import "../../styles/_main.scss";
import "../../styles/_mediaQuery.scss";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className="header">
                <a className='logo' href="#">LOGO</a>
                <div className={`nav-overlay ${showMenu ? 'd-block' : 'd-none'}`}></div>
                <nav id='navigation' className={`${showMenu ? 'd-block' : 'd-n'}`}>
                    <ul className='nav-list'>
                        <li className="nav-item"><a className='nav-link' href=""><span>01.</span><span>About</span></a></li>
                        <li className="nav-item"><a className='nav-link' href=""><span>02.</span><span>Education</span></a></li>
                        <li className="nav-item"><a className='nav-link' href=""><span>03.</span><span>Projects</span></a></li>
                    </ul>
                    <span className='contact-btn'><Button color='primary' variant="outlined">Contact</Button></span>
                </nav>
                <div className='toggleMenu'>
                    <i className={`menuIcon ${showMenu ? 'd-none' : 'd-block'}`} onClick={() => { setShowMenu(true) }}><MenuIcon /></i>
                    <i className={`closeIcon ${showMenu ? 'd-block' : 'd-none'}`} onClick={() => { setShowMenu(false) }}><CloseIcon /></i>
                </div>
            </div>
        </>
    )
}

export default Header
