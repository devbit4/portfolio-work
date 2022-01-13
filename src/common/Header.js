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
    )
}

export default Header;