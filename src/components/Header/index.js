import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <nav id={'nav-main'}>
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/cadastrar/0'}>
                Cadastrar
            </NavLink>
            <NavLink to={'/criptografia'}>
                Arquivos
            </NavLink>
            <NavLink to={'/calculos'}>
                Calculos
            </NavLink>
        </nav>
    );
}

export default Header;
