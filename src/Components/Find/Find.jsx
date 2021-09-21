import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Fonts from '../../Style/Fonts';

import Cl from './Find.module.scss'
import FindButton from './FindButton';
const Find = ({children, withFilter, searchQuery, setSearchQuery}) => {
    if(withFilter===undefined){
        withFilter=true
    }
    const History = useHistory();
    const Location = useLocation();
    const ThisPageLink = Location.pathname
    function OpenFilter(){
        History.push(ThisPageLink + '/Filter')
    }
    return (
        <div>
            <div className={Cl.Find}>
                <label>
                    <div className={Cl.icon}></div>
                    <input  
                        style={Fonts.Body1}
                        name="Find" 
                        type="text" 
                        placeholder={children}
                        value={searchQuery}
                        autoComplete='off'
                        onChange={e=>setSearchQuery(e.target.value)}
                        />
                </label>
                {
                    withFilter===true &&
                    <div className={Cl.FilterButtonWrapper} onClick={OpenFilter}>
                        <div className={Cl.VrLine}></div>
                        <div className={Cl.FilterButton}></div>
                    </div>
                }
            </div>
            <FindButton/>
        </div>     
    );
};

export default Find;