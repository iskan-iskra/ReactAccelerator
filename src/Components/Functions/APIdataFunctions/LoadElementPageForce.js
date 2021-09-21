import { useEffect } from "react";
import { useLocation } from "react-router";


const LoadElementPageForce = (Store, removeWordOfPath)=>{
    const location = useLocation();
    const removePartOfPath = '/'+removeWordOfPath+'/'
    const ThisId = location.pathname.slice(removePartOfPath.length)
    useEffect(()=>{
        Store.getOneElementForce(ThisId)
    },[Store, ThisId])
}
export default LoadElementPageForce