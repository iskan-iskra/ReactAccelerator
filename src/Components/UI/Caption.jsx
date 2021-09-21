import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const Caption = ({children, ...props}) => {
    return (
        <div {...props} className={Cl.Caption} style={Fonts.Caption}>
            {children}
        </div>
    );
};

export default Caption;