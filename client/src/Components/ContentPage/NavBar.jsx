import { useState } from 'react';
import Menu from './Menu';
import './NavBar.css';

const NavBar = ({menustate}) => {

    return (
        <>
            <div className="navbar">
                <p onClick={menustate}>NAVBAR</p>
            </div>      
        </>
    )
}

export default NavBar;