import {createContext} from "react"

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: ()=>{},

    isCollapse: false,
    setIsCollapse: () => {},
    
    currentTabSelected: false,
    setCurrentTabSelected: () => {},
})