import React from 'react';
import './Header.css';
import logo from '../../../img/w-logo.png'

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#h">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" aria-current="page" href="#h">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" href="#a">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" href="#b">Blogs</a>
                            </li>
                            <li className="nav-item sign-in">
                                <a className="nav-link text-black fw-bold" href="#si">Sign in</a>
                            </li>
                            <li className="nav-item sign-up ms-2">
                                <a className="nav-link text-white fw-bold" href="#su">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;