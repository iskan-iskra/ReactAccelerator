import { observer } from 'mobx-react-lite';
import React from 'react';
import Cl from './StatusCheckbox.module.scss'
import UIStore from '../../Store/UIStore';
import Checkbox from '../UI/Checkbox';

const StatusCheckbox = observer(({children,stateCode}) => {
    function setChecked(){
        if(UIStore.filterStatusState===stateCode){
            UIStore.setFilterStatusState(null)
        }
        else{
            UIStore.setFilterStatusState(stateCode)
        }
    }
    let Checked = false;
    if(UIStore.filterStatusState===stateCode){
        Checked = true
    }
    return (
        <div onClick={setChecked} className={Cl.StatusCheckbox}>
            <Checkbox Checked={Checked}>{children}</Checkbox>
        </div>
    );
})

export default StatusCheckbox;