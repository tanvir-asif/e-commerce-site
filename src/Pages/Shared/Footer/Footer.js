import React from 'react';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../img/w-logo.png'
import fb from './img/fb.png';
import ins from './img/ins.png';
import tw from './img/tw.png';
import yt from './img/yt.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 single-box">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-lg-4 col-sm-6 single-box">
                            <p className="footer-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione omnis aperiam quia, eveniet sunt recusandae aut adipisci odit autem ullam quibusdam beatae molestias ipsa optio ipsum laboriosam nihil aliquam. Vitae atque numquam, autem accusamus excepturi non laboriosam!</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;