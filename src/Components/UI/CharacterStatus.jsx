import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const CharacterStatus = ({children, textCentre, status, ...props}) => {
    const rootClassStatus = [Cl.CharacterStatus]
    if(textCentre){
        rootClassStatus.push(Cl.textCentre)
    }
    if(status!==0){
        rootClassStatus.push(Cl.Dead)
    }
    return (
        <div 
            {...props} 
            style={Fonts.OverLine} 
            className={rootClassStatus.join(" ")}>
                {children}
        </div>
    );
};

export default CharacterStatus;