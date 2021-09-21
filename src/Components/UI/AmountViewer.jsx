import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const AmountViewer = ({children}) => {
    return (
        <div className={Cl.AmountViewer} style={Fonts.OverLine}>
            {children}
        </div>
    );
};

export default AmountViewer;