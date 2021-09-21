import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Fonts from '../../Style/Fonts';
import ScrollingPositionTop from '../Functions/ScrollingFunctions/ScrollingPositionTop';
import Cl from "./Navbar.module.scss";

const NavButton = ({children, ...props}) => {
    const RootNavButtonClass = [Cl.NavButton]
    const location = useLocation();
    const ThisPageLink = location.pathname
    if(ThisPageLink.includes(props.link.substring(0, props.link.length-1))){
        RootNavButtonClass.push(Cl.active)
    }
    return (
        <NavLink onClick={ScrollingPositionTop} to={props.link} className={RootNavButtonClass.join(" ")}>
            <div className={Cl.Icon}></div>
            <div className={Cl.Title} style={Fonts.Caption}>{children}</div>
        </NavLink>
        
    );
};

export default NavButton;