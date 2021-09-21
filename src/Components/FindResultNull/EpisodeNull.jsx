import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './ElementNull.module.scss'
const EpisodeNull = () => {
    return (
        <div className={Cl.Container}>
            <div className={Cl.imageEpisodeNull}></div>
            <div className={Cl.Title} style={Fonts.SubTitle1}>Эпизода с таким названием не найдено</div>
        </div>
    );
};

export default EpisodeNull;