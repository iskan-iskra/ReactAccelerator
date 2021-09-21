import React from 'react';
import FilterSort from '../../Components/FilterSort/FilterSort';
import TitleWrapper from '../../Components/FilterTitle/TitleWrapper';
import StatusCheckbox from '../../Components/StatusCheckbox/StatusCheckbox';
import GenderCheckbox from '../../Components/GenderCheckbox/GenderCheckbox';
import HrLine from '../../Components/UI/HrLine';
import Cl from './ElementFilter.module.scss'
import Fonts from '../../Style/Fonts';

const CharacterFilter = () => {
    const rootStatuses = [{code:0,title:'Живые'},
                          {code:1,title:'Мертвые'},
                          {code:2,title:'Неизвестно'}]
    const rootGenders = [{code:0,title:'Мужчины'},
                          {code:1,title:'Женщины'},
                          {code:2,title:'Беcполые'}]

    return (
        <div className={Cl.Filter}>
            <TitleWrapper withClearFilter>Фильтр</TitleWrapper>
            <FilterSort/>
            <HrLine withMargin={true}/>
            <div className={Cl.filterWrapper}>
                <div className={Cl.caption} style={Fonts.OverLine}>Статус</div>
                <div className={Cl.CheckboxesContainer}>
                    {
                        rootStatuses.map(OneStatuse=>
                            <StatusCheckbox
                                key={OneStatuse.code}
                                stateCode={OneStatuse.code}>
                                {OneStatuse.title}
                            </StatusCheckbox>)
                    }
                </div>
            </div>
            <HrLine withMargin={true}/>
            <div className={Cl.filerWrapper}>
                <div className={Cl.caption} style={Fonts.OverLine}>Пол</div>
                <div className={Cl.CheckboxesContainer}>
                    {
                        rootGenders.map(OneGender=>
                            <GenderCheckbox
                                key={OneGender.code}
                                stateCode={OneGender.code}>
                                {OneGender.title}
                            </GenderCheckbox>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CharacterFilter;