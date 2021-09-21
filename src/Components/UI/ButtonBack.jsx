import React from 'react';
import { useHistory } from 'react-router';
import Cl from './UI.module.scss'

const ButtonBack = () => {
    const History = useHistory()
    function returnPreviousPage(){
        History.goBack()
    }
    return (
        <div onClick={returnPreviousPage} className={Cl.ButtonBackWrapper}>
            <div className={Cl.ButtonBack}></div>
        </div>
       
    );
};

export default ButtonBack;