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
            <div className="fixed-block">
                <div className="absolute">
                    <div className="tabs">
                        <div style={{ paddingLeft: "10rem" }}></div>
                        <div onClick={() => {clicklink(1); togglePanel();}} className={`${state === 1 ? "tab active-tab" : "tab"}`} >
                           {isPanelOpen  ?  <FiChevronDown/> : <FiChevronUp/>}
                        </div>
                        <div onClick={() => clicklink(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}>
                            <AiOutlinePlus/> 
                            <p>Ajouter un produit</p> 
                        </div>
                        <div onClick={() => clicklink(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`}>
                            <MdModeEditOutline/>
                            <p>Modifier un produit</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className={`${state ===  1? "content active-content" : "content"}`}>
                        </div>
                        <div className={`${state === 2 ? "content active-content" : "content"}`}>
                            <i></i>
                            <p>Ajouter un produit </p>
                        </div>
                        <div className={`${state === 3 ? "content active-content" : "content"}`}>
                            <i></i>
                            <p>Modifier un produit </p>
                        </div>
                    </div>
                </div>
            </div>
        </PanelStyled>
    )
}

const PanelStyled = styled.div`
position:relative;
margin: 0 auto;
color: black;
align-self: flex-end;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
width: 87.2rem;



.absolute{
    min-height: 60vh;
    position: fixed;
    top:500px;
    width: 87.2rem;
}

.fixed-block{

    
}

.tabs {
    display: flex;
}

.tab, .active-tab{
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid ${theme.colors.greyLight};
    display: flex;
    justify-items: center;
    align-items: center;
}
.tab{
    background: white;
    padding:0.5rem 1rem;
    text-align: center;
    cursor: pointer;
    position: relative;
    color: black;

}

.active-tab{
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
    min-height:38.65vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}

p{
    margin: 0;
    font-size: 16px;
    line-height:21.79px;
    margin-left: 20px;
}

.content, .active-content{
}
.content{
    display: none;
    position: relative;
}

.active-content{
    display: block;
}

`
export default Panel