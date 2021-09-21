import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import CharactersListComponent from '../../Components/CharactersList/CharactersListComponent';
import LoadElementPage from '../../Components/Functions/APIdataFunctions/LoadElementPage';
import ScrollingPositionTop from '../../Components/Functions/ScrollingFunctions/ScrollingPositionTop';
import ButtonBack from '../../Components/UI/ButtonBack';
import HrLine from '../../Components/UI/HrLine';
import LocationTitle from '../../Components/UI/LocationTitle';
import LocationStore from '../../Store/LocationStore';
import Fonts from '../../Style/Fonts';
import Cl from './LocationProfile.module.scss'
const LocationProfile = observer(() => {
    // настройка экрана на верх при открытии страницы
    const { pathname } = useLocation();
    useEffect(() => {
        ScrollingPositionTop()
    },[pathname])
    // Загрузка данных о локации
    LoadElementPage(LocationStore, 'Location')
    const Info = LocationStore.OneElement
    

    return (
        <div>
            <ButtonBack/>
            <div className={Cl.BackgroundPhoto}>
                <div className={Cl.BackgroundShadow}></div>
                <img src={Info.imageName} alt="" />
            </div>
            <div className={Cl.MainInfoContainer}>
                <LocationTitle
                    Name={Info.name}
                    Type={Info.type}
                    Measurement={Info.measurements}
                />
                <div className={Cl.About} style={Fonts.Text}>
                    {Info.about}
                </div>
                <HrLine/>
                <CharactersListComponent 
                    List={Info.characters} 
                    withButtonForward={true}
                    withTitle={true}/>
            </div>
        </div>
    );
})

export default LocationProfile;