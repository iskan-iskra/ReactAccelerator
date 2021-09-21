import React from 'react';
import Cl from './UI.module.scss'

const HrLine = ({withMargin}) => {
    const rootClass = [Cl.HrLine]
    if(withMargin===true){
        rootClass.push(Cl.withMargin)
    }
    return (
        <div className={rootClass.join(' ')}>
            
        </div>
    );
};

export default HrLine;