import React from 'react';
import './styles.css';
import 'typeface-roboto';

const Header = () => (
    <div className="headerContainer">
        <ul className="header">
            <li><a href="sign up">Sign Up</a></li>
            <li><a href="dashboard">Dashboard</a></li>
            <li><a href="profile">Profile</a></li>
        </ul>
    </div>
);
export default Header;