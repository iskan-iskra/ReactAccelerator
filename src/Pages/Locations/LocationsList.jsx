import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Find from '../../Components/Find/Find';
import FilterResultNull from '../../Components/FindResultNull/FilterResultNull';
import LocationNull from '../../Components/FindResultNull/LocationNull';
import CountLimitForWindow from '../../Components/Functions/APIdataFunctions/CountLimitForWindow';
import InitialElementsLoad from '../../Components/Functions/APIdataFunctions/InitialElementsLoad';
import compareNames from '../../Components/Functions/CompareFunctions/CompareNames';
import ScrollingPagination from '../../Components/Functions/ScrollingFunctions/ScrollingPagination';
import Location from '../../Components/Location/Location';
import Navbar from '../../Components/Navbar/Navbar';
import AmountViewer from '../../Components/UI/AmountViewer';
import LocationStore from '../../Store/LocationStore';
import UIStore from '../../Store/UIStore';
import Cl from './LocationsList.module.scss';

const LocationsList = observer(() => {
    // настройка загрузки изначального количества Локаций на весь экран устройства
    // формула высоты соответствует с формулой высоты SCSS данного элемента
     
    let OneLocationHeight = .64*(window.innerWidth - 32)
    if(OneLocationHeight>500){
        OneLocationHeight = .64*500
    }
    let Limit = CountLimitForWindow(OneLocationHeight)
    
    InitialElementsLoad(LocationStore, Limit)
    // динамическая пагинация скролингом
    ScrollingPagination(LocationStore,Limit)

    // ФИЛЬТР списка
    let thisLocationsList = [];
    // фильтрация по запросу поиска
    const [searchQuery, setSearchQuery] = useState('')
    let filterStatus = false
    if(searchQuery.length>0){
        if(LocationStore.AllElements.length<LocationStore.AmountOfAllElements){
            LocationStore.getAllElements(LocationStore.AmountOfAllElements, 1)
        }
        thisLocationsList = LocationStore.AllElements.filter(el=>el.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    else{
        thisLocationsList = LocationStore.AllElements
    }
    // Фильтрация списка по алфавиту 
    if(UIStore.sortStateLocation!==0){
        if(LocationStore.AllElements.length<LocationStore.AmountOfAllElements){
            LocationStore.getAllElements(LocationStore.AmountOfAllElements, 1)
        }
        if(UIStore.sortStateLocation===1){
            thisLocationsList = thisLocationsList.slice().sort(compareNames)
        }
        if(UIStore.sortStateLocation===2){
            thisLocationsList = thisLocationsList.slice().sort(compareNames).reverse()
        }
    }
    if(UIStore.filterLocationType!=='Не выбрано'){
        filterStatus = true
        if(LocationStore.AllElements.length<LocationStore.AmountOfAllElements){
            LocationStore.getAllElements(LocationStore.AmountOfAllElements, 1)
        }
        thisLocationsList = thisLocationsList.filter(el=>el.type===UIStore.filterLocationType)
    }
    if(UIStore.filterLocationMeasure!=='Не выбрано'){
        filterStatus = true
        if(LocationStore.AllElements.length<LocationStore.AmountOfAllElements){
            LocationStore.getAllElements(LocationStore.AmountOfAllElements, 1)
        }
        thisLocationsList = thisLocationsList.filter(el=>el.measurements===UIStore.filterLocationMeasure)
    }

    return (
        <div>
            <Navbar/>
            <Find searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
                Найти локацию
            </Find>
            <div className={Cl.InfoWrapper}>
                {
                    searchQuery.length===0 &&
                    <AmountViewer>
                        Всего локаций: {LocationStore.AmountOfAllElements}
                    </AmountViewer>
                }
                {
                    searchQuery.length>0 &&
                    <AmountViewer>
                        Результаты поиска
                    </AmountViewer>
                } 
            </div>
            <div className={Cl.LocationList}>
                {thisLocationsList.map((loc)=>
                    <Location
                        key={loc.id}
                        LocationInfo={loc}
                    ></Location>
                )}
                {
                    searchQuery.length>0&&
                    thisLocationsList.length===0&&
                    <LocationNull/>
                }
                 {
                    searchQuery.length===0&&
                    filterStatus===true&&
                    thisLocationsList.length===0&&
                    <FilterResultNull/>
                }
            </div>
        </div>
    );
})

export default LocationsList;