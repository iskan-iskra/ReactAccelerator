import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './ElementNull.module.scss'

const FilterResultNull = () => {
    return (
        <div className={Cl.Container}>
            <div className={Cl.imageFilterNull}></div>
            <div className={Cl.Title} style={Fonts.SubTitle1}>По данным фильтра нечего не найдено</div>
        </div>
    );
};

export default FilterResultNull;