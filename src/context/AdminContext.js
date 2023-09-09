import {createContext} from "react"

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: ()=>{},
    
    state: Number,
    setState: ()=>{},
    
    isChevronUp: false,
    setIsChevronUp: ()=>{}
})