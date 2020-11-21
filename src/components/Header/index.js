import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <nav id={'nav-main'}>
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/cadastrar'}>
                Cadastrar
            </NavLink>
        </nav>
    );
}

export default Header;
