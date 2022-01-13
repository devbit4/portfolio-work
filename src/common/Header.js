import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const gnb = useRef(null);
    const active = {
        color: "#324B4C", fontWeight: "bold"
    }

    const onToggle = (e) => {
        gnb.current.classList.toggle("on");
    }
    return (
        <div className='head'>
            <header>
                {/* <div className="inner"> */}
                <h1><NavLink exact to="/">STORIES</NavLink></h1>
                <ul id="gnb" ref={gnb}>
                    <li><NavLink exact activeStyle={active} to="/about">ABOUT</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/community">COMMUNITY</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/contact">CONTACT</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/join"><i className="fas fa-sign-in-alt"></i></NavLink></li>
                </ul>


                <button onClick={onToggle} className="toggle"><i className="fas fa-bars"></i></button>
                {/* </div> */}
            </header>
            <div className="custom-shape-divider-top-1642087422">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header;