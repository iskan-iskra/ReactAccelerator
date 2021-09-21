import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory} from 'react-router';
import ModalThemeSwitcher from '../../Components/Modals/ModalThemeSwitcher';
import Navbar from '../../Components/Navbar/Navbar';
import ButtonForward from '../../Components/UI/ButtonForward';
import HrLine from '../../Components/UI/HrLine';
import UIStore from '../../Store/UIStore';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './Settings.module.scss'

const Settings = observer(() => {
    useEffect(() => {
        if(UserStore.ServerIsAsked===false){
            UserStore.getUserInfo()
        }
    })
    const UserFullName = [UserStore.MySername, UserStore.MyName, UserStore.MyPatronymic]
    function ExitFromAccaunt(){
        console.log('exit');
        UserStore.clearAllInfo()
        UserStore.setErrorStatus(null)
    }
    const History = useHistory()
    function OpenUpdateProfile(){
        History.push('/Settings/UpdateProfile')
    }
    return (
        <div className={Cl.Settings}>
            <div className={Cl.MainTitle} style={Fonts.HeadLine6}>Настройки</div>
            <div className={Cl.UserWrapper}>
                <div className={Cl.Photo}></div>
                <div className={Cl.InfoWrapper}>
                    <div className={Cl.Title} style={Fonts.SubTitle1}>{UserFullName.join(' ')}</div>
                    <div className={Cl.Caption} style={Fonts.Body2}>{UserStore.MyLogin}</div>
                </div>
            </div>
            <div className={Cl.ButtonUpdate} style={Fonts.SubTitle1} onClick={OpenUpdateProfile}>Редактировать</div>
            <div className={Cl.ButtonExit} style={Fonts.SubTitle1} onClick={ExitFromAccaunt}>Выйти</div>
            <HrLine withMargin={true}/>
            <div className={Cl.Caption} style={Fonts.OverLine}>Внешний вид</div>
            <div className={Cl.ThemeButton} onClick={()=>UIStore.setThemeModal(true)}>
                <div className={Cl.Icon}></div>
                <div className={Cl.InfoWrapper}>
                    <div className={Cl.Title} style={Fonts.SubTitle1}>Темная тема</div>
                    <div className={Cl.Caption} style={Fonts.Body2}>{UIStore.ThemeStatus}</div>
                </div>
                <ButtonForward/>
            </div>
            <HrLine withMargin={true}/>
            <div className={Cl.InfoWrapper}>
                <div className={Cl.Caption} style={Fonts.OverLine}>О приложении</div>
                <div className={Cl.Title} style={Fonts.Text}>Это прототип приложения разработанный:</div>
                <a className={Cl.Title} style={Fonts.Text} href={'https://github.com/iskan-iskra'}>ISKAN-ISKRA</a>
            </div>
            <HrLine withMargin={true}/>
            <div className={Cl.InfoWrapper}>
                <div className={Cl.Caption} style={Fonts.OverLine}>Версия приложения</div>
                <div className={Cl.Title} style={Fonts.Text}>{'Rick & Morty v1.0.0 BETA'}</div>
            </div>
            <Navbar/>
            <ModalThemeSwitcher/>
        </div>
    );
})

export default Settings;