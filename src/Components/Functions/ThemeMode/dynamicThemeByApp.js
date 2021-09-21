import activateDarkMode from "./activateDarkTheme";
import activateLightMode from "./activateLightTheme";

const dynamicThemeByApp = ()=>{
    let now = new Date();
        let hour = now.getHours();
        if (hour < 4 || hour >= 16) {
            activateDarkMode();
        }
        else{activateLightMode()}
}
export default dynamicThemeByApp