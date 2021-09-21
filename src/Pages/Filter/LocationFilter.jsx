import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import FilterSort from '../../Components/FilterSort/FilterSort';
import TitleWrapper from '../../Components/FilterTitle/TitleWrapper';
import ButtonForward from '../../Components/UI/ButtonForward';
import HrLine from '../../Components/UI/HrLine';
import UIStore from '../../Store/UIStore';
import Fonts from '../../Style/Fonts';
import Cl from './ElementFilter.module.scss'

const LocationFilter = observer(() => {
    const History = useHistory();
    const Location = useLocation();
    const ThisPageLink = Location.pathname
    function OpenPage(pagename){
        History.push(ThisPageLink + "/" + pagename)
    }
    let LocationTypeTitle = 'Тип'
    let LocationMeasureTitle = 'Измерение'
    if(UIStore.filterLocationType!=='Не выбрано'){
        LocationTypeTitle = UIStore.filterLocationType
    }
    if(UIStore.filterLocationMeasure!=='Не выбрано'){
        LocationMeasureTitle = UIStore.filterLocationMeasure
    }
    return (
        <div className={Cl.Filter}>
            <TitleWrapper withClearFilter>Фильтр</TitleWrapper>
            <FilterSort/>
            <HrLine withMargin={true}/>
            <div className={Cl.caption} style={Fonts.OverLine}>Фильтровать по:</div>
            <div 
                onClick={()=>OpenPage('Type')}
                className={Cl.filterWrapper}
                style={{marginTop: '36px'}}>
                <div className={Cl.title} style={Fonts.SubTitle1}>
                    {LocationTypeTitle}
                </div>
                <div className={Cl.annotation} style={Fonts.Body2}>Выберите тип локации</div>
                <ButtonForward/>
            </div>
            <div 
                onClick={()=>OpenPage('Measure')}
                className={Cl.filterWrapper}
                style={{marginTop: '36px'}}>
                <div className={Cl.title} style={Fonts.SubTitle1}>
                    {LocationMeasureTitle}
                </div>
                <div className={Cl.annotation} style={Fonts.Body2}>Выберите измерение локации</div>
                <ButtonForward/>
            </div>
        </div>
    );
})

export default LocationFilter;