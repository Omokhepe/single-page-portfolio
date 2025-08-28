import React from 'react';
import {navLinks} from "../constant/data.js";
import './Nav.css'

const Nav = () => {
    return (
        <header>
            <nav className="nav">
                <a href="/" className='navTitle textPresetBold'>
                    Omoh Imobu
                </a>
                <ul className="navLabel textPreset1Med">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className='navLink'>{link.label}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Nav;