import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ModalAuthorizationError from '../../Components/Modals/ModalAuthorizationError';
import ButtonSubmit from '../../Components/UI/ButtonSubmit';
import UserInput from '../../Components/UI/UserInput';
import UserInputPassword from '../../Components/UI/UserInputPassword';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './Authorization.module.scss'

const Authorization = observer(() => {
    const [InputLoginStatus, setInputLoginStatus] = useState(false)
    const [InputPasswordStatus, setInputPasswordStatus] = useState(false)
    const History = useHistory()
    function clickToLogin(){
        if(UserStore.MyLogin.length<5){
            setInputLoginStatus(true)
        }
        else{setInputLoginStatus(false)};
        if(UserStore.MyPassword.length<5){
            setInputPasswordStatus(true)
        }
        else{setInputPasswordStatus(false)};
        if(UserStore.MyLogin.length>=5&&UserStore.MyPassword.length>=5){
            UserStore.getMyToken()
        }
        if(UserStore.MyToken!==null){
            History.push("/")
        }
    }
    function linkToRegistration(){
        History.push('/Registration')
        UserStore.clearAllInfo()
    }
    return (
        <div className={Cl.Authorization}>
            <div className={Cl.MainLogo}></div>
            <div className={Cl.Form}>
                <UserInput
                    InputTitle={"Логин"}
                    InputPlaceholder={"Логин"}
                    InputType={"text"}
                    InputValue={UserStore.MyLogin}
                    InputOnchange={(state)=>UserStore.setMyLogin(state)}
                    InputError={InputLoginStatus}
                    isLogin/>  
                <UserInputPassword InputError={InputPasswordStatus}/>
                <ButtonSubmit onClick={clickToLogin}>Войти</ButtonSubmit>
            </div>
            <div className={Cl.Registration}>
                <div 
                    className={Cl.Caption} 
                    style={Fonts.Body2}>
                        У вас еще нет аккаунта?
                </div>
                <div 
                    className={Cl.Link} 
                    onClick={linkToRegistration} 
                    style={Fonts.Body2}>
                        Создать
                </div>
            </div>
            <ModalAuthorizationError/>
        </div>
    );
})

export default Authorization;

