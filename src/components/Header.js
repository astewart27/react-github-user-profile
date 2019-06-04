import React from 'react';
import logo from '../images/Octocat.png';

const Header = () => (
    <header>
        <div className="header-container">
            <h1>Github User Dashboard</h1>
            <img src={logo} alt="Github"/>
        </div>
    </header>
);

export default Header;