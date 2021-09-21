import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Find from '../../Components/Find/Find';
import EpisodeStore from '../../Store/EpisodeStore'
import Episode from '../../Components/Episode/Episode';
import Cl from './EpisodesList.module.scss'
import SeasonsList from '../../Components/SeasonsList/SeasonsList';
import compareSeries from '../../Components/Functions/CompareFunctions/CompareSeries';
import InitialElementsLoad from '../../Components/Functions/APIdataFunctions/InitialElementsLoad';
import AmountViewer from '../../Components/UI/AmountViewer';
import EpisodeNull from '../../Components/FindResultNull/EpisodeNull';
import Navbar from '../../Components/Navbar/Navbar';


const EpisodesList = observer(() => {
    // получение эпизодов (всех так как на момент прописания кода не было 
    // функционала получения эпизодов по сезонам, рефакторинг уже не уместен)
    let maxLimit = 0
    // to get allelements from backend Limit must be equal to 0
    InitialElementsLoad(EpisodeStore, maxLimit)
    
    // Фильтрация серий по сезонам
    const [chosenSeason,setChosenSeason] = useState(1)
    function chooseSeason(el){
        setChosenSeason(el)
    }
    let thisEpisodesList = [];
    // фильтрация серий по запросу поиска
    const [searchQuery, setSearchQuery] = useState('')
    if(searchQuery.length>0){
        thisEpisodesList = EpisodeStore.AllElements.filter(el=>el.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    else{
        thisEpisodesList = EpisodeStore.AllElements.filter(el=>el.season===chosenSeason)
    }
   
    return (
        <div className={Cl.EpisodesListContainer}>
            <Navbar/>
            <Find withFilter={false} searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
                Найти эпизод
            </Find>
            {
                searchQuery.length===0 &&
                <SeasonsList chooseSeason={chooseSeason} chosenSeason={chosenSeason}/>
            }
            {
                 searchQuery.length>0 &&
                 <AmountViewer>
                     Результаты поиска
                 </AmountViewer>
            }
            <div className={Cl.EpisodesList}>
                {thisEpisodesList.slice().sort(compareSeries).map((episode)=>
                    <Episode key={episode.id} Info={episode}>
                    </Episode>
                )}
                {
                    searchQuery.length>0&&
                    thisEpisodesList.length===0&&
                    <EpisodeNull/>
                }
            </div>
        </div>
    );
})

export default EpisodesList;