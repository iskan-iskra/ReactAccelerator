import React from 'react';
import { useHistory } from 'react-router';
import Fonts from '../../Style/Fonts';
import DateTransformation from '../Functions/InnerHTMLdataFunctions/DateTransformation';
import Cl from './Episode.module.scss'

const Episode = ({Info, children}) => {
    
    const History = useHistory()
    function OpenPage(){
        History.push("/Episode/" + Info.id)
    }
    const SerialDate = DateTransformation(Info.premiere)
    
    return (
        <div onClick={OpenPage} className={Cl.Serial}>
            <div className={Cl.ImgWrapper}>
                <img src={Info.imageName} alt="" />
            </div>
            <div className={Cl.InfoWrapper}>
                <div className={Cl.Number} style={Fonts.OverLine}>{'Серия '+Info.series}</div>
                <div className={Cl.Name} style={Fonts.Title}>{Info.name}</div>
                <div className={Cl.Date} style={Fonts.Body2}>{SerialDate}</div>
            </div>
            {children}
        </div>
    );
};

export default Episode;