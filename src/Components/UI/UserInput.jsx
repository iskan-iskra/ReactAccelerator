import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const UserInput = ({InputValue, InputOnchange, InputType, InputPlaceholder, InputTitle, isLogin, InputError}) => {
    const rootClassLabel = [Cl.Label]
    if(InputError){
        rootClassLabel.push(Cl.Error)
    }
    return (
        <div className={Cl.InputWrapper}>
        <div className={Cl.Title} style={Fonts.Body2}>{InputTitle}</div>
        <label className={rootClassLabel.join(' ')}>
            <input 
                style={Fonts.Body1}
                className={Cl.Input} 
                type={InputType}
                autoComplete='off'
                placeholder={InputPlaceholder}
                value={InputValue}
                onChange={e=>InputOnchange(e.target.value)}/>
            {
                isLogin&&
                <div className={Cl.LoginIcon}></div>
            }
            
        </label>
    </div>
    );
};

export default UserInput;