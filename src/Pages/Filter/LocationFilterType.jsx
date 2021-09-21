import { observer } from 'mobx-react-lite';
import React from 'react';
import TitleWrapper from '../../Components/FilterTitle/TitleWrapper';
import HrLine from '../../Components/UI/HrLine';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import Cl from './ElementFilter.module.scss'

const LocationFilterType = observer(() => {
    const typesOfLocations = [
                            "Мир",
                            "Планета",
                            "Микровселенная",
                            "Цитадель",
                            "Созданная реальность",
                            "Здание",
                            "Неопределенно"
                            ]
    
    return (
        <div className={Cl.Filter}>
            <TitleWrapper>Выберите тип</TitleWrapper>
            <div style={{paddingTop: '36px'}}></div>
            <div 
                style={Fonts.SubTitle1}
                className={Cl.textButton}>
                {UIStore.filterLocationType}
            </div>
            <HrLine withMargin={true}/>
            {   typesOfLocations.map((el,index)=>{
                    if(UIStore.filterLocationType === el){
                        const rootClass = [Cl.textButton, Cl.active]
                        return (
                        <div 
                            style={Fonts.SubTitle1}
                            onClick={()=>UIStore.setFilterLoactionType('Не выбрано')}
                            className={rootClass.join(' ')}
                            key={index}>
                            {el}
                        </div>)
                    }
                    else{
                        return (
                        <div 
                            style={Fonts.SubTitle1}
                            onClick={()=>UIStore.setFilterLoactionType(el)}
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

export default LocationFilterType;