import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const Checkbox = ({children, Checked}) => {
    const rootCheckbox=[Cl.Checkbox];
    if(Checked===true){
        rootCheckbox.push(Cl.Checked)
    }
    return (
        <div className={Cl.CheckboxWrapper}>
            <div className={rootCheckbox.join(" ")}></div>
            <div className={Cl.title} style={Fonts.SubTitle1}>{children}</div>
        </div>
    );
};

export default Checkbox;