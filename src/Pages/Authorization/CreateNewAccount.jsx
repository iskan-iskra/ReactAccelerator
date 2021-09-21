import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ModalAuthorizationError from '../../Components/Modals/ModalAuthorizationError';
import ButtonSubmit from '../../Components/UI/ButtonSubmit';
import HrLine from '../../Components/UI/HrLine';
import UserInput from '../../Components/UI/UserInput';
import UserInputPassword from '../../Components/UI/UserInputPassword';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './CreateNewAccount.module.scss'

const CreateNewAccount = observer(() => {
    const [InputNameStatus, setInputNameStatus] = useState(false)
    const [InputSernameStatus, setInputSernameStatus] = useState(false)
    const [InputLoginStatus, setInputLoginStatus] = useState(false)
    const [InputPasswordStatus, setInputPasswordStatus] = useState(false)
    const History = useHistory()
    function goBack(){
        History.push('/Authorization')
        UserStore.clearAllInfo()
    }
    function clearInputs(){
        UserStore.clearAllInfo()
        setInputNameStatus(false)
        setInputSernameStatus(false)
        setInputLoginStatus(false)
        setInputPasswordStatus(false)
    }
    function createNewAccaount(){
        if(UserStore.MyName.length<5){
            setInputNameStatus(true)
        }else{setInputNameStatus(false)}
        if(UserStore.MySername.length<5){
            setInputSernameStatus(true)
        }else{setInputSernameStatus(false)}
        if(UserStore.MyLogin.length<5||
            UserStore.isUserLoginFree===false){
            setInputLoginStatus(true)
        }else{setInputLoginStatus(false)}
        if(UserStore.MyPassword.length<5){
            setInputPasswordStatus(true)
        }else{setInputPasswordStatus(false)}
        UserStore.checkUser()
        if(
            UserStore.ErrorStatus===null&&
            UserStore.isUserLoginFree===true&&
            UserStore.MyLogin.length>=5&&
            UserStore.MyPassword.length>=5&&
            UserStore.MyName.length>=5&&
            UserStore.MySername.length>=5){
            UserStore.sendMyData()
        }
        UserStore.setUserLoginFree(false)
    }
    return (
        <div className={Cl.CreateNewAccount}>
            <div className={Cl.ButtonWrapper}>
                <div className={Cl.ButtonBack} onClick={goBack}></div>
                {
                    (UserStore.MyLogin.length>0||
                    UserStore.MyPassword.length>0||
                    UserStore.MyName.length>0||
                    UserStore.MySername.length>0||
                    UserStore.MyPatronymic.length>0)&&
                    <div className={Cl.ButtonClear} onClick={clearInputs}></div>
                }
            </div>
            <div className={Cl.Title} style={Fonts.HeadLine1}>Создать аккаунт</div>
            <UserInput
                InputTitle={"Имя"}
                InputPlaceholder={"Имя"}
                InputType={"text"}
                InputValue={UserStore.MyName}
                InputOnchange={(e)=>UserStore.setMyName(e)}
                InputError={InputNameStatus}/>
            <UserInput
                InputTitle={"Фамилия"}
                InputPlaceholder={"Фамилия"}
                InputType={"text"}
                InputValue={UserStore.MySername}
                InputOnchange={(e)=>UserStore.setMySername(e)}
                InputError={InputSernameStatus}/>
            <UserInput
                InputTitle={"Отчество"}
                InputPlaceholder={"Отчество"}
                InputType={"text"}
                InputValue={UserStore.MyPatronymic}
                InputOnchange={(e)=>UserStore.setMyPatronymic(e)}
                InputError={false}/>
            <HrLine withMargin={true}/>
            <UserInput
                InputTitle={"Логин"}
                InputPlaceholder={"Логин"}
                InputType={"text"}
                InputValue={UserStore.MyLogin}
                InputOnchange={(e)=>UserStore.setMyLogin(e)}
                InputError={InputLoginStatus}
                isLogin/>
            <UserInputPassword InputError={InputPasswordStatus}/>
            <ButtonSubmit onClick={createNewAccaount} style={{marginTop: "63px"}}>Создать</ButtonSubmit>
            <ModalAuthorizationError/>
        </div>
    );
})

export default CreateNewAccount;