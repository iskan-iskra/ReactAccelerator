import { useEffect } from "react";
import { useLocation } from "react-router";


const LoadElementPage = (Store, removeWordOfPath)=>{
    const location = useLocation();
    const removePartOfPath = '/'+removeWordOfPath+'/'
    const ThisId = location.pathname.slice(removePartOfPath.length)
    useEffect(()=>{
        Store.getOneElement(ThisId)
    },[Store, ThisId])
}
export default LoadElementPage