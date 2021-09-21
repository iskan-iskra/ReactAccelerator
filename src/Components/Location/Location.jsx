import React from 'react';
import { useHistory } from 'react-router';
import LocationTitle from '../UI/LocationTitle';
import Cl from './Location.module.scss'

const Location = (props) => {
    const Info = props.LocationInfo
    
    const history = useHistory()
    function OpenLocation(){
        history.push("/Location/"+Info.id)
    }


    return (
        <div onClick={OpenLocation} className={Cl.Location}>
            <img src={Info.imageName} alt="" />
            <div className={Cl.LocationTitleWrapper}>
                <LocationTitle
                    Name={Info.name}
                    Type={Info.type}
                    Measurement={Info.measurements}
                />
            </div>
        </div> 
    );
};

export default Location;