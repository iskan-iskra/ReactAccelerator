import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const UserInputPassword = observer(({InputError}) => {
    const rootClassLabel = [Cl.Label]
    if(InputError){
        rootClassLabel.push(Cl.Error)
    }
    const [passInputType, setPassInputType] = useState('password')
    const rootClassPasswordInput = [Cl.PasswordEYE]
    if(passInputType==='text'&&UserStore.MyPassword.length===0){
        setPassInputType('password')
    }
    if(passInputType==='text'&&UserStore.MyPassword.length>0){
        rootClassPasswordInput.push(Cl.active)
    }
    function clearPassWordInput(){
        if(passInputType==='password'){
            setPassInputType('text')
        }
        else{
            setPassInputType('password')
        }
    }
    return (
        <div className={Cl.InputWrapper}>
        <div className={Cl.Title} style={Fonts.Body2}>Пароль</div>
        <label className={rootClassLabel.join(' ')}>
            {   UserStore.MyPassword.length>0&&
                <div className={rootClassPasswordInput.join(" ")}
                    onClick={clearPassWordInput}></div>
            }
            <input 
                style={Fonts.Body1}
                className={Cl.Input}
                type={passInputType}
                placeholder={'Пароль'}
                value={UserStore.MyPassword}
                onChange={e=>UserStore.setMyPassword(e.target.value)}
                autoComplete='off'/>
            <div className={Cl.PasswordIcon}></div>
        </label>
    </div>
    );
})

export default UserInputPassword;