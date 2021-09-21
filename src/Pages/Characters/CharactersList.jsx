import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import CharacterStore from '../../Store/CharacterStore';
import Find from '../../Components/Find/Find';
import Cl from './CharactersList.module.scss';
import Character from '../../Components/Character/Character';
import AmountViewer from '../../Components/UI/AmountViewer';
import ScrollingPagination from '../../Components/Functions/ScrollingFunctions/ScrollingPagination';
import InitialElementsLoad from '../../Components/Functions/APIdataFunctions/InitialElementsLoad'
import CountLimitForWindow from '../../Components/Functions/APIdataFunctions/CountLimitForWindow';
import CharacterNull from '../../Components/FindResultNull/CharacterNull';
import UIStore from '../../Store/UIStore';
import compareFullNames from '../../Components/Functions/CompareFunctions/CompareFullNames';
import FilterResultNull from '../../Components/FindResultNull/FilterResultNull';
import Navbar from '../../Components/Navbar/Navbar';

const CharactersList = observer(() => {

    // Загрузка персонажей в список
    const OneCharacterHeight = 94
    let Limit = CountLimitForWindow(OneCharacterHeight)+3
    // изначальная загрузка на весь экран устройсва
    InitialElementsLoad(CharacterStore, Limit);
    // динамическая подгрузка
    ScrollingPagination(CharacterStore, Limit);


    // Смена типа вывода списка: колонка/Грид
    const ViewModeClass = [Cl.ViewButton]
    const CharacterListClass = [Cl.CharacterList]

    function ChangeViewMode(){
        UIStore.setViewStatus(!UIStore.viewStatus)
    }
    
    if(UIStore.viewStatus){
        ViewModeClass.push(Cl.wrap)
        CharacterListClass.push(Cl.wrap)
    }
    else{
        ViewModeClass.push(Cl.column)
        CharacterListClass.push(Cl.column)
    }
   
    // ФИЛЬТР СПИСКА
    let thisCharactersList = [];
    const [searchQuery, setSearchQuery] = useState('')
    let filterStatus = false
    // Фильтрация списка по запросу поиска
    if(searchQuery.length>0){
        if(CharacterStore.AllElements.length<CharacterStore.AmountOfAllElements){
            CharacterStore.getAllElements(CharacterStore.AmountOfAllElements, 1)
        }
        thisCharactersList = CharacterStore.AllElements.filter(el=>el.fullName.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    else{
        thisCharactersList = CharacterStore.AllElements
    }
    // Фильтрация списка по алфавиту
    if(UIStore.sortStateCharacter!==0){
        if(CharacterStore.AllElements.length<CharacterStore.AmountOfAllElements){
            CharacterStore.getAllElements(CharacterStore.AmountOfAllElements, 1)
        }
        if(UIStore.sortStateCharacter===1){
            thisCharactersList = thisCharactersList.slice().sort(compareFullNames)
        }
        if(UIStore.sortStateCharacter===2){
            thisCharactersList = thisCharactersList.slice().sort(compareFullNames).reverse()
        }
    }
    // Фильтрация списка по статусу персонажа
    if(UIStore.filterStatusState!==null){
        filterStatus = true
        if(CharacterStore.AllElements.length<CharacterStore.AmountOfAllElements){
            CharacterStore.getAllElements(CharacterStore.AmountOfAllElements, 1)
        }
        thisCharactersList = thisCharactersList.filter(el=>el.status===UIStore.filterStatusState)
    }
    // Фильтрация списка по полу персонажа
    if(UIStore.filterGenderState.length>0){
        filterStatus = true
        if(CharacterStore.AllElements.length<CharacterStore.AmountOfAllElements){
            CharacterStore.getAllElements(CharacterStore.AmountOfAllElements, 1)
        }
        thisCharactersList = thisCharactersList.filter(el=>UIStore.filterGenderState.includes(el.gender))
    }

    return (
        <div>
            <Navbar/>
            <Find searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
                Найти персонажа
            </Find>
            <div className={Cl.InfoWrapper}>
                {
                    searchQuery.length===0 &&
                    <AmountViewer>
                        Всего персонажей: {CharacterStore.AmountOfAllElements}
                    </AmountViewer>
                }
                {
                    searchQuery.length>0 &&
                    <AmountViewer>
                        Результаты поиска
                    </AmountViewer>
                }                
                <div 
                    className={ViewModeClass.join(" ")}
                    onClick={ChangeViewMode}>
                </div>
            </div>
            <div className={CharacterListClass.join(" ")}>
                {thisCharactersList.map((Pers)=>
                    <Character
                        viewType={UIStore.viewStatus}
                        key={Pers.id}
                        CharacterInfo={Pers}
                    ></Character>
                )}
                {
                    searchQuery.length>0&&
                    thisCharactersList.length===0&&
                    <CharacterNull/>
                }
                 {
                    searchQuery.length===0&&
                    filterStatus===true&&
                    thisCharactersList.length===0&&
                    <FilterResultNull/>
                }
            </div>
        </div>
    );
})

export default CharactersList;