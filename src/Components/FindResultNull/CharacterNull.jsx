import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './ElementNull.module.scss'

const CharacterNull = () => {
    return (
        <div className={Cl.Container}>
            <div className={Cl.imageCharacterNull}></div>
            <div className={Cl.Title} style={Fonts.SubTitle1}>Персонаж с таким именем не найден</div>
        </div>
    );
};

export default CharacterNull;