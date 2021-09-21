import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ButtonBack2 from '../../Components/UI/ButtonBack2';
import ButtonSubmit from '../../Components/UI/ButtonSubmit';
import UserInput from '../../Components/UI/UserInput';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './UpdateProfile.module.scss'

const UpdateProfile = observer(() => {
    const [InputNameStatus, setInputNameStatus] = useState(false)
    const [InputSernameStatus, setInputSernameStatus] = useState(false)
    const History = useHistory()
    function goBack(){
        History.goBack()
    }
    function UpdateAccaount(){
        if(UserStore.MyName.length<5){
            setInputNameStatus(true)
        }else{setInputNameStatus(false)}
        if(UserStore.MySername.length<5){
            setInputSernameStatus(true)
        }else{setInputSernameStatus(false)}
        if(
            UserStore.ErrorStatus===null&&
            UserStore.MyName.length>=5&&
            UserStore.MySername.length>=5){
            UserStore.updateUserInfo()
            History.goBack()
        }
    }
    return (
        <div className={Cl.UpdateProfile}>
            <div className={Cl.TitleWrapper}>
                <ButtonBack2 onClick={goBack}/>
                <div className={Cl.MainTitle} style={Fonts.HeadLine6}>Редактировать профиль</div>
            </div>
            <div className={Cl.UserPhotoWrapper}>
                <div className={Cl.UserPhoto}></div>
                <div className={Cl.ButtonChangePhoto} style={Fonts.SubTitle1}>Изменить фото</div>
            </div>
            <div className={Cl.InfoWrapper}>
                <div className={Cl.Caption} style={Fonts.OverLine}>Профиль</div>
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
            </div>
            <div className={Cl.ButtonsWrapper}>
                <ButtonSubmit onClick={UpdateAccaount}>Сохранить</ButtonSubmit>
            </div>
            
        </div>
    );
})

export default UpdateProfile;