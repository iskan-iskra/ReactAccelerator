import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import activateDarkMode from '../Components/Functions/ThemeMode/activateDarkTheme';
import activateLightMode from '../Components/Functions/ThemeMode/activateLightTheme';
import dynamicThemeByApp from '../Components/Functions/ThemeMode/dynamicThemeByApp';
import dynamicThemeByDevice from '../Components/Functions/ThemeMode/dynamicThemeByDevice';
import UIStore from '../Store/UIStore';
import UserStore from '../Store/UserStore';
import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

const AppRouter = observer(() => {
    let isAuth = false
    useEffect(() => {
        UserStore.checkMyToken()
        if(localStorage.getItem('MyTheme')){
            UIStore.setThemeStatus(localStorage.getItem('MyTheme'))
        }
    })
    if(UserStore.MyToken!==null){
        isAuth = true
    }
    else{isAuth = false}

    if(UIStore.ThemeStatus==='Включена'){
        activateDarkMode()
    }
    if(UIStore.ThemeStatus==='Выключена'){
        activateLightMode()
    }
    if(UIStore.ThemeStatus==='Следовать настройкам системы'){
        dynamicThemeByDevice()
    }
    if(UIStore.ThemeStatus==='В режиме энерго сбережения'){
        dynamicThemeByApp()
    }

    return (
        isAuth
            ?    
            <Switch>
                {privateRoutes.map(route=>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                )}
                <Redirect to='/'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route=>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                )}
                <Redirect to='/Authorization'/>
            </Switch>

    );
})

export default AppRouter;