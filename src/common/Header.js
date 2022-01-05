import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const active = {
        color: "#324B4C", fontWeight: "bold"
    }
    return (
        <header>
            <div className="inner">
                <h1><NavLink exact to="/">STORIES</NavLink></h1>
                <ul id="gnb">
                    <li><NavLink exact activeStyle={active} to="/about">ABOUT</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/community">COMMUNITY</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/contact">CONTACT</NavLink></li>
                    <li><NavLink exact activeStyle={active} to="/join"><i className="fas fa-sign-in-alt"></i></NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;