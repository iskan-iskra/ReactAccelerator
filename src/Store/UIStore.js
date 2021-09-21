import { makeAutoObservable } from "mobx"

class UIStore{
    ThemeStatus = 'Включена'
    ThemeModal = false
    viewStatus = false
    sortStateCharacter = 0
    sortStateLocation =0 
    filterStatusState = null
    filterGenderState = []
    filterLocationType = 'Не выбрано'
    filterLocationMeasure = 'Не выбрано'
    constructor(){
        makeAutoObservable(this)
    }
    setThemeStatus = (state)=>{
        this.ThemeStatus=state
        localStorage.setItem('MyTheme',state)
    }
    setThemeModal = (state)=>{
        this.ThemeModal=state
    }
    // action для типа отображения списка персонажей
    setViewStatus = (status)=>{
        this.viewStatus=status
    }
    // action для сортировки по алфавиту списка персонажей
    setSortStateCharacter = (state)=>{
        this.sortStateCharacter=state
    }
    // action для определения фильтра персонажей по статусу 
    setFilterStatusState = (state)=>{
        this.filterStatusState=state
    }
    // action для добавления фильтрации персонажей по половому признаку
    addFilterGenderState = (state)=>{
        this.filterGenderState.push(state)
    }
    // action для удаления фильтрации персонажей по половому признаку
    removeFilterGenderState = (state)=>{
        let removeStateIndex = this.filterGenderState.indexOf(state)
        this.filterGenderState.splice(removeStateIndex, 1)
    }
    // action для очистки фильтра соритровки списка персонажей
    clearCharactersFilters = ()=>{
        this.sortStateCharacter = 0
        this.filterStatusState = null
        this.filterGenderState = []
    }
    // action для сортировки по алфавиту списка локаций
    setSortStateLocation = (state)=>{
        this.sortStateLocation=state
    }
    // action для определения фильтрации локаций по Типу
    setFilterLoactionType = (Type)=>{
        this.filterLocationType = Type
    }
    // action для определения фильтрации локаций по Измерению
    setFilterLoactionMeasure = (Measure)=>{
        this.filterLocationMeasure = Measure
    }
    // action для очистки фильтра сортировки списка локаций
    clearLocationsFilters = ()=>{
        this.sortStateLocation = 0
        this.filterLocationType = 'Не выбрано'
        this.filterLocationMeasure = 'Не выбрано'
    }
}
export default new UIStore()