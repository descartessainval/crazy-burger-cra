import React, { useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';


const Panel = () => {
    const [state, setState] = useState(1)
    const[isPanelOpen, setIsPanelOpen] = useState(false)

    const clicklink = (index) => {
        setState(index);
    }

    const togglePanel =()=>{
        setIsPanelOpen(!isPanelOpen);
    }
    
    return (
        <PanelStyled>
                <div className="container-height">
                    {/* tabs admin */}
                    <ul className="tabs">
                        <li style={{ paddingLeft: "10rem" }}></li>
                        <li onClick={() => {clicklink(1); togglePanel();}} className={`${state === 1 ? "tab active-tab" : "tab"}`} >
                           {isPanelOpen  ?  <FiChevronDown/> : <FiChevronUp/>}
                        </li>
                        <li onClick={() => clicklink(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}>
                                <AiOutlinePlus/> 
                                <a href='#'>Ajouter un produit</a> 
                        </li>
                        <li onClick={() => clicklink(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`}>
                            <MdModeEditOutline/>
                            <a href='#'>Modifier un produit</a>
                        </li>
                    </ul>
                {/* content */}
                    <div className="contents contents_hide">
                        <div className={`${state ===  1? "content active-content" : "content"}`}>
                        </div>
                        <div className={`${state === 2 ? "content active-content" : "content"}`}>
                            <p>Ajouter un produit </p>
                        </div>
                        <div className={`${state === 3 ? "content active-content" : "content"}`}>
                            <p>Modifier un produit </p>
                        </div>
                    </div>
                </div>
        </PanelStyled>
    )
}

const PanelStyled = styled.div`
 position: absolute;
color: black;
/* top: 556px; */
width: 100%;
height: 27.08559vh; 


background: red;


bottom: 0;
right: 0;
left: 0;

/*.container-height{
}

.tabs {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    height: 2.688rem;
}

.tab, .active-tab{
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid ${theme.colors.greyLight};
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 16px; 
}

.tab{
    background: white;
    text-align: center;
    cursor: pointer;
    position: relative;
    color: black;

}
.tab a{
    padding-left: 1rem;
    text-decoration: none;
}

.tab a:hover{*/
    /* text-underline-offset: 5px; */
/* }

.active-tab, .active-tab a {
    border: none;
    background: black;
    color: white;
}

.active-tab::after{
    content:'';
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: initial;
}

.contents{
    background: white;
    min-height:29.65vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

p{
    margin: 0;
    font-size: 16px;
    line-height:21.79px;
    margin-left: 20px;
}

.content{
    display: none;
    position: relative;
}

.active-content{
    display: block;
} */ 



`
export default Panel