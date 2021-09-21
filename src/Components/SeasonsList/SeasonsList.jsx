import { observer } from 'mobx-react-lite';
import React from 'react';
import EpisodeStore from '../../Store/EpisodeStore';
import Fonts from '../../Style/Fonts';
import Cl from './SeasonsList.module.scss'

const SeasonsList = observer((props) => {
    const AmountOfSeasons =Math.round(EpisodeStore.AmountOfAllElements/10) 
    const Seasons = []
    for(let i=1;i<=AmountOfSeasons;i++){
        let Season = 'Сезон '+i
        Seasons.push(Season)
    }
    
    return (
        <div className={Cl.SeasonsList}>
            <div className={Cl.ScrollWrapper}>
                {Seasons.map((Season, index)=>{
                    let rootClass = [Cl.Season]
                    if(index+1===props.chosenSeason){
                        rootClass.push(Cl.active)
                    }
                    return (
                    <div
                        style={Fonts.Button}
                        key={index}
                        className={rootClass.join(' ')}
                        onClick={()=>props.chooseSeason(index+1)}>
                        {Season}
                    </div>
                    )
                })}
            </div>
        </div>
    );
})

export default SeasonsList;