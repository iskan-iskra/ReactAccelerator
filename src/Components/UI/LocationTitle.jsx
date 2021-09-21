import React from 'react';
import Fonts from '../../Style/Fonts';
import Cl from './UI.module.scss'

const LocationTitle = ({Measurement, Type, Name}) => {


    return (
        <div className={Cl.LocationTitle}>
            <div className={Cl.Name} style={Fonts.Title}>{Name}</div>
            <div className={Cl.InfoWrapper}>
                <div style={Fonts.Caption}>{Type}</div>
                {
                    Measurement!=="" 
                    && 
                    <div style={Fonts.Caption}>
                        {" "+Measurement}
                    </div>
                }
            </div>
        </div>
    );
};

export default LocationTitle;