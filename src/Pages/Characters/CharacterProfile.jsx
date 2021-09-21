import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import CharacterStore from '../../Store/CharacterStore';
import Cl from './CharacterProfile.module.scss';
import ButtonForward from '../../Components/UI/ButtonForward';
import Caption from '../../Components/UI/Caption';
import HrLine from '../../Components/UI/HrLine';
import ButtonBack from '../../Components/UI/ButtonBack';
import CharacterStatus from '../../Components/UI/CharacterStatus';
import Episode from '../../Components/Episode/Episode'
import { useHistory, useLocation } from 'react-router';
import compareSeasonAndSeriaes from '../../Components/Functions/CompareFunctions/CompareSeasonAndSeries';
import StatusAndGenderRender from '../../Components/Functions/InnerHTMLdataFunctions/StatusAndGenderRender';
import LoadElementPage from '../../Components/Functions/APIdataFunctions/LoadElementPage';
import ScrollingPositionTop from '../../Components/Functions/ScrollingFunctions/ScrollingPositionTop';
import Fonts from '../../Style/Fonts';

const CharacterProfile = observer(() => {
    const { pathname } = useLocation();
    useEffect(() => {
        ScrollingPositionTop()
    },[pathname])
   
    // загрузка данных персонажа
    LoadElementPage(CharacterStore, 'Character')

    let Info = CharacterStore.OneElement
    let placeOfBirthName = 'Неизвестно';
    let locationName= 'Неизвестно';
    // настройка места рождения т.к. при получении места рождения персонажа 
    // из полученного с API списка персонажей и получение места рождения
    // из получения конкретного персонажа с API, КЛЮЧИ не совпадают.
    // backend developer спасибо большое за то что мне пришлось писать этот
    // излишний код, можешь гордиться собой!!!
    if(Info.placeOfBirth){
        if(Info.placeOfBirth.name){placeOfBirthName = Info.placeOfBirth.name}
        else{placeOfBirthName = Info.placeOfBirth}
    }
    if(Info.location){locationName = Info.location.name}

    const PhotoUrl =Info.imageName
    let generalInfo = Info.gender + "-"+ Info.status
    generalInfo = StatusAndGenderRender(generalInfo)
    let Status = generalInfo.status
    let Gender = generalInfo.gender
    
    const episodeList = Info.episodes

    // навигация
    const History = useHistory()
    // перейти к выбранному эпизоду
    function LinkToEpisodesList(){
        History.push("/Episodes")
    }
    // перейти к локации рождения персонажа
    function OpenPlaceOfBirth(){
        if(Info.placeOfBirthId!==null){
            History.push("/Location/" + Info.placeOfBirthId)
        }
    }
    // перейти к локации нахождения персонажа
    function OpenLocation(){
        if(Info.locationId!==null){
            History.push("/Location/" + Info.locationId)
        }
    }
    
    return (
        <div className={Cl.CharacterProfile}>
            <ButtonBack/>
            <div className={Cl.BackgroundPhoto}>
                <div className={Cl.Shadow}></div>
                <img src={PhotoUrl} alt="" />
            </div>
            <div className={Cl.Profile}>
                <div className={Cl.Photo}>
                    <img src={PhotoUrl} alt="" />
                </div>
                <div className={Cl.Name} style={Fonts.HeadLine4}>{Info.fullName}</div>
                <CharacterStatus status={Info.status} textCentre>{Status}</CharacterStatus>
                <div className={Cl.Info} style={Fonts.Text}>{Info.about}</div>
                <div className={Cl.Wrapper}>
                    <div className={Cl.Gender}>
                        <Caption>Пол</Caption>
                        <div style={Fonts.Body2}>{Gender}</div>
                    </div>
                    <div className={Cl.Race}>
                        <Caption>Расса</Caption>
                        <div style={Fonts.Body2}>{Info.race}</div>
                    </div>
                </div>
                <div onClick={OpenPlaceOfBirth} className={Cl.BirthPlace}>
                    <Caption>Место рождения</Caption>
                    <div style={Fonts.Body2}>{placeOfBirthName}</div>
                    {placeOfBirthName !== 'Неизвестно' && <ButtonForward/>}
                </div>
                <div onClick={OpenLocation} className={Cl.Location}>
                    <Caption>Местоположение</Caption>
                    <div style={Fonts.Body2}>{locationName}</div>
                    {locationName !== 'Неизвестно' && <ButtonForward/>}
                </div>
            </div>
            <HrLine/>
            <div className={Cl.EpisodesWrapper}>
                <div className={Cl.TitleWrapper}>
                    <div className={Cl.Title} style={Fonts.HeadLine6}>Эпизоды</div>
                    <div onClick={LinkToEpisodesList} className={Cl.Link} style={Fonts.Caption}>Все эпизоды</div>
                </div>
                {   
                    episodeList &&
                    episodeList.slice().sort(compareSeasonAndSeriaes).map((OneEpisode)=> 
                        <Episode 
                            key={OneEpisode.id} 
                            Info={OneEpisode}
                        >
                            <ButtonForward/>
                        </Episode>
                    )
                }
            </div>
        </div>
    );
})

export default CharacterProfile;