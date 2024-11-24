import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Fitness Tracker</h1>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
