
import { makeObservable, override } from "mobx"
import CharacterService from "../API/CharacterService"
import RootStore from "./RootStore"


class CharacterStore extends RootStore{
    constructor(){
        super(CharacterService)
        makeObservable(this, {
            getAllElements: override,
            getOneElement: override,
            getOneElementForce: override
        })
    }
}
export default new CharacterStore()