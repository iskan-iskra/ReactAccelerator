import activateDarkMode from "./activateDarkTheme";
import activateLightMode from "./activateLightTheme";

const dynamicThemeByDevice = ()=>{
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
    const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;
  
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){activateDarkMode()}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){activateLightMode()}
  
    if(isDarkMode) activateDarkMode()
    if(isLightMode) activateLightMode()
    if(isNotSpecified || hasNoSupport) {
        console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
        let now = new Date();
        let hour = now.getHours();
        if (hour < 4 || hour >= 16) {
            activateDarkMode();
        }
        else{activateLightMode()}
    }
}

export default dynamicThemeByDevice