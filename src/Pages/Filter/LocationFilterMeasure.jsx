import { observer } from 'mobx-react-lite';
import React from 'react';
import TitleWrapper from '../../Components/FilterTitle/TitleWrapper';
import HrLine from '../../Components/UI/HrLine';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import Cl from './ElementFilter.module.scss'

const LocationFilterMeasure = observer(() => {
    const measuresOfLocations = [
                            "Измерение 35-C",
                            "Измерение C-137",
                            "Измерение C-500A",
                            "Измерение J19ζ7",
                            "Измерение Дупиду",
                            "Измерение подмены"
                            ]
    
    return (
        <div className={Cl.Filter}>
            <TitleWrapper>Выберите тип</TitleWrapper>
            <div style={{paddingTop: '36px'}}></div>
            <div 
                style={Fonts.SubTitle1}
                className={Cl.textButton}>
                {UIStore.filterLocationMeasure}
            </div>
            <HrLine withMargin={true}/>
            {   measuresOfLocations.map((el,index)=>{
                    if(UIStore.filterLocationMeasure === el){
                        const rootClass = [Cl.textButton, Cl.active]
                        return (
                        <div 
                            style={Fonts.SubTitle1}
                            onClick={()=>UIStore.setFilterLoactionMeasure('Не выбрано')}
                            className={rootClass.join(' ')}
                            key={index}>
                            {el}
                        </div>)
                    }
                    else{
                        return (
                        <div 
                            style={Fonts.SubTitle1}
                            onClick={()=>UIStore.setFilterLoactionMeasure(el)}
                            className={Cl.textButton}
                            key={index}>
                            {el}
                        </div>)
                    }
                })
            }
            
        </div>
    );
})

export default LocationFilterMeasure;