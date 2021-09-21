import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const ButtonSubmit = ({children, ...props}) => {
    return (
        <div className={Cl.ButtonSubmit} {...props} style={Fonts.SubTitle1}>{children}</div>
    );
};

export default ButtonSubmit;