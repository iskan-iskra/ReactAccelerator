import { useEffect } from "react"


const ScrollingPagination = (Store,Limit)=>{
    const nextPage = Store.NextPage
    const leftPages = Store.LeftPages

    useEffect(()=>{
        document.addEventListener('scroll', ScrollHandler)
        return ()=>{
            document.removeEventListener('scroll', ScrollHandler)
        }
    })
    
    const ScrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<80
            &&leftPages!==0
            &&Store.ServerIsAsked===false){
            Store.getAllElements(Limit,nextPage)
        };
    }
}

export default ScrollingPagination
