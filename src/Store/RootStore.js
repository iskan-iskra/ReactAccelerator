import { action, makeObservable, observable, runInAction } from "mobx"

export default class RootStore{
    AllElements = []
    OneElement = []
    NextPage=0
    AmountOfAllElements=0
    LeftPages=0
    ServerIsAsked=false
    Service = null
    constructor(Service){
        this.Service = Service
        makeObservable(this, {
            AllElements: observable,
            OneElement: observable,
            NextPage: observable,
            AmountOfAllElements: observable,
            LeftPages: observable,
            ServerIsAsked: observable,
            getAllElements: action,
            getOneElement: action,
            getOneElementForce: action
        })
    }
    getAllElements = async (limit, page)=>{
        this.ServerIsAsked = true
        if(this.Service !== null){
            await this.Service.getAll(limit, page)
            .then((response)=>{
                const info = response.data
                runInAction(()=>{
                    this.LeftPages = info.pages
                    this.NextPage = info.nextPage
                    this.AmountOfAllElements = info.totalRecords
                    this.ServerIsAsked = false;
                    info.data.forEach(elementget => {
                        if(!this.AllElements.find(el=>el.id === elementget.id)){
                            this.AllElements.push(elementget)
                        }    
                    });
                })
            })
        }
    }
    getOneElement = async (ID)=>{
        const necessaryElement = this.AllElements.find(el=>el.id===ID)
        if(necessaryElement){
            this.OneElement = necessaryElement
        }
        else{
            await this.Service.getOneById(ID)
                .then((response)=>{
                    const info = response.data
                    runInAction(()=>{
                        this.OneElement = info.data
                        this.AllElements.push(info.data)
                    })
                })
        }
    }
    getOneElementForce = async (ID)=>{
        await this.Service.getOneById(ID)
            .then((response)=>{
                const info = response.data
                runInAction(()=>{
                    this.OneElement = info.data
                    const necessaryElement = this.AllElements.find(el=>el.id===ID)
                    if(necessaryElement){
                        let necessaryElementIndex = this.AllElements.indexOf(necessaryElement)
                        this.AllElements.splice(necessaryElementIndex,1,info.data)
                    }
                    else{this.AllElements.push(info.data)}
                })
            })
    }
}