const activateDarkMode = ()=>{
    const rootElement = document.querySelector(':root')
    const darkTheme = {
        '--color-1': 'var(--darkmod-1)',
        '--color-2': 'var(--darkmod-2)',
        '--color-3': 'var(--darkmod-3)',
        '--color-4': 'var(--darkmod-4)',
        '--color-5': 'var(--darkmod-5)',
        '--color-6': 'var(--darkmod-6)',
        '--color-7': 'var(--darkmod-7)',
        '--color-8': 'var(--darkmod-8)',
    }
    for(let el in darkTheme) {
        rootElement.style.setProperty(el, darkTheme[el])
    }
}
export default activateDarkMode