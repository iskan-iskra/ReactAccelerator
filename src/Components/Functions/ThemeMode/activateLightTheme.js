const activateLightMode = ()=>{
    const rootElement = document.querySelector(':root')
    const lightTheme = {
        '--color-1': 'var(--lightmod-1)',
        '--color-2': 'var(--lightmod-2)',
        '--color-3': 'var(--lightmod-3)',
        '--color-4': 'var(--lightmod-4)',
        '--color-5': 'var(--lightmod-5)',
        '--color-6': 'var(--lightmod-6)',
        '--color-7': 'var(--lightmod-7)',
        '--color-8': 'var(--lightmod-8)',
    }
    for(let el in lightTheme) {
        rootElement.style.setProperty(el, lightTheme[el])
    }
}
export default activateLightMode