
const ScrollingPositionTop=(how)=>{
    const props = {
        top: 0,
        behavior: null
    }
    if(how==='smooth'){
        props.behavior = 'smooth'
    }
    else{props.behavior ='auto'}
    window.scrollTo(props);
}
export default ScrollingPositionTop