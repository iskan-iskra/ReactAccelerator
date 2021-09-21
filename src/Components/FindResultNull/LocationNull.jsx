import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './ElementNull.module.scss'
const LocationNull = () => {
    return (
        <div className={Cl.Container}>
            <div className={Cl.imageLocationNull}></div>
            <div className={Cl.Title} style={Fonts.SubTitle1}>Локации с таким именем не найдено</div>
        </div>
    );
};

export default LocationNull;