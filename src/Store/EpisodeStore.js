
import { makeObservable, override } from "mobx"
import EpisodesService from "../API/EpisodeService"
import RootStore from "./RootStore"


class EpisodeStore extends RootStore{
    constructor(){
        super(EpisodesService)
        makeObservable(this, {
            getAllElements: override,
            getOneElement: override,
            getOneElementForce: override
        })
    }
}
export default new EpisodeStore()