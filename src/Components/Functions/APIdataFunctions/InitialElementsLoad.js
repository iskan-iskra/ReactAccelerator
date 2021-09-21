import { useEffect } from "react"


const InitialElementsLoad=(Store, Limit)=>{ 
    useEffect(()=>{
        if(Limit === 0){
            if(Store.AmountOfAllElements===0){
                Store.getAllElements(Limit,0)
            }
            else if(Store.AllElements.length < Store.AmountOfAllElements){
                Store.getAllElements(Limit,0)
            }
        }
        else{
            if(Store.AllElements.length < Limit){
                Store.getAllElements(Limit,1)
            };
        }
    })
}
export default InitialElementsLoad