import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import ButtonBack2 from '../UI/ButtonBack2';
import Cl from './TitleWrapper.module.scss'
const TitleWrapper = observer(({children, withClearFilter}) => {
    if(withClearFilter===undefined){
        withClearFilter=false
    }
    else{
        withClearFilter=true
    }
    const History = useHistory()
    function returnPreviousPage(){
        History.goBack()
    }
    const elementLocation = useLocation().pathname
    let viewClearFilter = false
    function clearFilterStates(){
        if(elementLocation.includes('Characters')){
            UIStore.clearCharactersFilters()
        }
        if(elementLocation.includes('Locations')){
            UIStore.clearLocationsFilters()
        }
    }
    if(elementLocation.includes('Characters')){
        if(UIStore.filterGenderState.length>0 ||
            UIStore.filterStatusState!==null ||
            UIStore.sortStateCharacter!==0){
            viewClearFilter = true
        }
    }
    if(elementLocation.includes('Locations')){
        if(UIStore.sortStateLocation!==0 ||
            UIStore.filterLocationType!=="Не выбрано" ||
            UIStore.filterLocationMeasure!=="Не выбрано"){
            viewClearFilter = true
        }
    }


    return (
        <div className={Cl.TitleWrapper}>
            <ButtonBack2 onClick={returnPreviousPage}/>
            <div className={Cl.Title} style={Fonts.HeadLine6}>{children}</div>
            {
                viewClearFilter===true&&
                withClearFilter===true&&
                <div className={Cl.ClearFilter} onClick={clearFilterStates}></div>
            }
            
        </div>
    );
})
export default TitleWrapper;