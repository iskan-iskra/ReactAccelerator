
import { makeObservable, override } from "mobx"
import LocationService from "../API/LocationService"
import RootStore from "./RootStore"


class LocationStore extends RootStore{
    constructor(){
        super(LocationService)
        makeObservable(this, {
            getAllElements: override,
            getOneElement: override,
            getOneElementForce: override
        })
    }
}
export default new LocationStore()