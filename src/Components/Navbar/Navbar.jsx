import React from 'react';
import Cl from "./Navbar.module.scss"
import NavButton from './NavButton';

const Navbar = () => {
    return (
        <div className={Cl.Navbar}>
            <NavButton link={"/Characters"}>Персонажи</NavButton>
            <NavButton link={"/Locations"}>Локации</NavButton>
            <NavButton link={"/Episodes"}>Эпизоды</NavButton>
            <NavButton link={"/Settings"}>Найстройки</NavButton>
        </div>
    );
};

export default Navbar;