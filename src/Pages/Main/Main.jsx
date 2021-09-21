import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Cl from './Main.module.scss'

const Main = () => {
    return (
        <div className={Cl.Main}>
            <Navbar/>
            <div className={Cl.Title}></div>
            <div className={Cl.Logo}></div>
        </div>
    );
};

export default Main;