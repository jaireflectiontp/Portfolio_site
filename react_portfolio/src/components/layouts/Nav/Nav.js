import React from 'react'
import "./nav.scss"
const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand logoContainer" href="#">logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse block-nav" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link headerLink" href="#"><span className='nav-item-count'>1.</span><span className='nav-item-text'>About</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link headerLink" href="#"><span className='nav-item-count'>2.</span><span className='nav-item-text'>Education</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link headerLink" href="#"><span className='nav-item-count'>3.</span><span className='nav-item-text'>Projects</span></a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-success" type="button">Contact Me</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
