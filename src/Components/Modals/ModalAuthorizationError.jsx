import { observer } from 'mobx-react-lite';
import React from 'react';
import UserStore from '../../Store/UserStore';
import Fonts from '../../Style/Fonts';
import Cl from './Modal.module.scss'

const ModalAuthorizationError = observer(() => {
    const rootClassModal = [Cl.Modal]
    if (UserStore.ErrorStatus!==null) {
        rootClassModal.push(Cl.Active)
    }
    function submitError(){
        UserStore.setErrorStatus(null)
        UserStore.setMyLogin('')
        UserStore.setMyPassword('')
    }
    return (
        <div className={rootClassModal.join(' ')}>
            <div className={Cl.ModalAuthorizationError}>
                <div className={Cl.Title} style={Fonts.HeadLine6}>Ошибка</div>
                <div className={Cl.Message} style={Fonts.Body2}>{UserStore.ErrorStatus}</div>
                <div 
                    style={Fonts.Body2}
                    className={Cl.ButtonOk} 
                    onClick={submitError}>
                    Ок
                </div>
            </div>
        </div>
    );
})

export default ModalAuthorizationError;