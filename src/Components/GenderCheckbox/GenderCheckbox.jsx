import { observer } from 'mobx-react-lite';
import React from 'react';
import Cl from './GenderCheckbox.module.scss'
import UIStore from '../../Store/UIStore';
import Checkbox from '../UI/Checkbox';


const GenderCheckbox = observer(({children,stateCode}) => {
    function setChecked(){
        if(UIStore.filterGenderState.includes(stateCode)){
            UIStore.removeFilterGenderState(stateCode)
        }
        else{
            UIStore.addFilterGenderState(stateCode)
        }
    }
    let Checked = false;
    if(UIStore.filterGenderState.includes(stateCode)){
        Checked = true
    }
    return (
        <div onClick={setChecked} className={Cl.GenderCheckbox}>
            <Checkbox Checked={Checked}>{children}</Checkbox>
        </div>
    );
})

export default GenderCheckbox;