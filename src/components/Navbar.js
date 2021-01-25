import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
        <nav className={classes.Navbar}>
            <div className="navbar-container">
                <div className={classes.item}>Item 1</div>
                <div className="nav-item">Item 1</div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;