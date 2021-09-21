import React, { useEffect, useState } from 'react';
import ScrollingPositionTop from '../Functions/ScrollingFunctions/ScrollingPositionTop';
import Cl from './Find.module.scss'

const FindButton = () => {
    const [findStatus, setFindStatus] = useState(false)
    const findClass = [Cl.FindButton]
    

    useEffect(()=>{
        document.addEventListener('scroll', ScrollHandler)
        return function(){
            document.removeEventListener('scroll', ScrollHandler)
        }
    })


    const ScrollHandler = (e) => {
        if(e.target.documentElement.scrollTop>58){
            setFindStatus(true)
        }
        else{setFindStatus(false)}
    }


    if(findStatus===true){
        findClass.push(Cl.active)
    }
    

    function returnToFind(){
        ScrollingPositionTop('smooth')
    }
    return (
        <div className={findClass.join(" ")} onClick={returnToFind}></div>  
    );
};

export default FindButton;