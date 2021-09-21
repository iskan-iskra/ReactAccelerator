import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import Cl from './Modal.module.scss'

const ModalThemeSwitcher = observer(() => {
    const ThemeStates = ['Включена', "Выключена", "Следовать настройкам системы", "В режиме энерго сбережения"]
    const rootClassModal = [Cl.Modal]
    const [ThemePretendent,SetThemePretendent] = useState(UIStore.ThemeStatus)
    if(UIStore.ThemeModal===true){
        rootClassModal.push(Cl.Active)
    }
    const [buttonOkView,setButtonOkView] = useState(false)
    function CancelTheme(){
        SetThemePretendent(UIStore.ThemeStatus)
        setButtonOkView(false)
        UIStore.setThemeModal(false)
    }
    function AcceptTheme(){
        if(ThemePretendent!==UIStore.ThemeStatus){
            UIStore.setThemeStatus(ThemePretendent)
        }
        setButtonOkView(false)
        UIStore.setThemeModal(false)
    }
    function changeTheme(e){
        SetThemePretendent(e)
        setButtonOkView(true)
    }
    return (
        <div className={rootClassModal.join(' ')}>
            <div className={Cl.ModalThemeSwitcher}>
                <div className={Cl.Title} style={Fonts.HeadLine6}>Темная тема</div>
                <div className={Cl.Selectors}>
                    {ThemeStates.map((ThemeState, index) => {
                        const rootClassSelector = [Cl.Selector]
                        if(ThemePretendent===ThemeState){
                            rootClassSelector.push(Cl.ActiveTheme)
                        }
                        return (
                            <div 
                                className={rootClassSelector.join(' ')}
                                key={index}
                                onClick={()=>changeTheme(ThemeState)}>
                                    <div className={Cl.SelectIcon}></div>
                                    <div className={Cl.SelectTitle} style={Fonts.SubTitle1}>{ThemeState}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={Cl.Buttons}>
                    {
                        buttonOkView===true&&
                        <div className={Cl.Accept} onClick={AcceptTheme} style={Fonts.Button}>Применить</div>
                    }
                    <div className={Cl.Cancel} onClick={CancelTheme} style={Fonts.Button}>Отменить</div>
                </div>
            </div>
        </div>
    );
})

export default ModalThemeSwitcher;