import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import CharactersListComponent from '../../Components/CharactersList/CharactersListComponent';
import DateTransformation from '../../Components/Functions/InnerHTMLdataFunctions/DateTransformation';
import LoadElementPageForce from '../../Components/Functions/APIdataFunctions/LoadElementPageForce';
import ButtonBack from '../../Components/UI/ButtonBack';
import ButtonPlayVideo from '../../Components/UI/ButtonPlayVideo';
import Caption from '../../Components/UI/Caption';
import HrLine from '../../Components/UI/HrLine';
import EpisodeStore from '../../Store/EpisodeStore';
import Cl from './EpisodeProfile.module.scss'
import LoadElementPage from '../../Components/Functions/APIdataFunctions/LoadElementPage';
import ScrollingPositionTop from '../../Components/Functions/ScrollingFunctions/ScrollingPositionTop';
import { useLocation } from 'react-router';
import Fonts from '../../Style/Fonts';

const EpisodeProfile = observer(() => {
    // настройка начала экрана сверху
    const { pathname } = useLocation();
    useEffect(() => {
        ScrollingPositionTop()
    },[pathname])
    // загрузка конкретного эпизода (стандартная)
    // то есть если эпизод уже получен в списке эпиходов полученных с API 
    // то он не загружается еще раз, а берется из списка
    LoadElementPage(EpisodeStore, 'Episode')
    // НОООО спасибо backend developer в списке эпизодов для каждого эпизода
    // не передаются персонажи, поэтому есть отдельная для этого функция 
    // насильно загружающая данные об эпизоде, даже если он уже есть в хранилище
    // благо они подгружаются сверх имеющихся данных и создается впечетление что
    // список персонажей подгружается отдельно.
    LoadElementPageForce(EpisodeStore, 'Episode')

    // настройка даты 
    const Info = EpisodeStore.OneElement
    let SerialDate = 'В этом тысячилетии'
    if(Info.premiere){
        SerialDate = DateTransformation(Info.premiere)
    }


    
    return (
        <div>
            <ButtonBack/>
            <div className={Cl.BackgroundPhoto}>
                <div className={Cl.BackgroundShadow}></div>
                <img src={Info.imageName} alt="" />
            </div>
            <div className={Cl.MainInfoContainer}>
                <div className={Cl.ButtonPlayWrapper}>
                    <ButtonPlayVideo/>
                </div>
                <div className={Cl.Name} style={Fonts.HeadLine5}>{Info.name}</div>
                <div className={Cl.Number} style={Fonts.OverLine}>{'Серия'+Info.series}</div>
                <div className={Cl.About} style={Fonts.Text}>{Info.plot}</div>
                <div className={Cl.DateWrapper}>
                    <Caption>Премьера</Caption>
                    <div className={Cl.Date} style={Fonts.Body2}>{SerialDate}</div>
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

export default EpisodeProfile;