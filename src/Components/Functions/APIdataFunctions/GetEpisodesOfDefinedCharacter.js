import { useEffect } from "react";
import EpisodeStore from "../../../Store/EpisodeStore";


const GetEpisodesOfDefinedCharacter = (Info)=>{
    const episodeList = []
    useEffect(() => {
        if(Info.episodes){
            Info.episodes.forEach(localEl => {
                EpisodeStore.getOneElement(localEl.id)
            });
        }
    }, [Info])
    if(Info.episodes){
        Info.episodes.forEach(localEl=>{
            EpisodeStore.AllElements.forEach(globalEl => {
                if(globalEl.id === localEl.id){
                    episodeList.push(globalEl)
                }
            })
        })
        return episodeList
    }
}
export default GetEpisodesOfDefinedCharacter