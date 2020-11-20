import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <nav id={'nav-main'}>
            <NavLink to={'/'}>
                Main
            </NavLink>
            <NavLink to={'/profile'}>
                Profile
            </NavLink>
        </nav>
    );
}

export default Header;
