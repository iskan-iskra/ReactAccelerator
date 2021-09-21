import { observer } from 'mobx-react-lite';
import React from 'react';
import { useLocation } from 'react-router';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import Cl from './FilterSort.module.scss'


const FilterSort = observer(() => {
    let sortStateType = null
    let setSortStateType = null
    const ThisPagePath = useLocation().pathname
    if(ThisPagePath.includes('Characters')){
        sortStateType = UIStore.sortStateCharacter
        setSortStateType = (state)=>UIStore.setSortStateCharacter(state)
    }
    if(ThisPagePath.includes('Locations')){
        sortStateType = UIStore.sortStateLocation
        setSortStateType = (state)=>UIStore.setSortStateLocation(state)
    }
    const rootFromZtoA = [Cl.FromZtoA];
    const rootFromAtoZ = [Cl.FromAtoZ];
    if(sortStateType===1){
        rootFromAtoZ.push(Cl.active)
    };
    if(sortStateType===2){
        rootFromZtoA.push(Cl.active)
    }
    function changeSort(sortState){
        if(sortStateType!==null){
            if(sortStateType===sortState){
                setSortStateType(0)
            }
            else{
                setSortStateType(sortState)
            }
        }
    }
    return (
        <div className={Cl.SortWrapper}>
            <div className={Cl.caption} style={Fonts.OverLine}>Сортировать</div>
            <div className={Cl.SortType}>
                <div className={Cl.title} style={Fonts.SubTitle1}>По алфавиту</div>
                <div className={Cl.Button} onClick={()=>changeSort(2)}>
                    <div className={rootFromZtoA.join(' ')}></div>
                </div>
                <div className={Cl.Button} onClick={()=>changeSort(1)}>
                    <div className={rootFromAtoZ.join(' ')}></div>
                </div>
            </div>
        </div>
    );
})

export default FilterSort;