import React, { useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';

const Panel = () => {
    const [state, setState] = useState(1)

    const action = (index) => {
        setState(index)
    }

    return (
        <PanelStyled>
            <div className="fixed-block">
                <div className="absolute">
                    <div className="tabs">
                        <div style={{paddingLeft:"10rem"}}></div>
                        <div onClick={() => action(1)} className={`${state === 1 ? "tab active-tab" : "tab"}`}> chevron vers le bas </div>
                        <div onClick={() => action(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}> Ajouter un produit  </div>
                        <div onClick={() => action(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`}> Modifier un produit </div>
                        <div onClick={() => action(4)} className={`${state === 4 ? "tab active-tab" : "tab"}`}> Modifier un produit </div>
                    </div>
                    <div className="contents">
                        <div className={`${state === 1 ? "content active-content" : "content"}`}>
                            <p>panel ouvert</p>
                        </div>
                        <div className={`${state === 2 ? "content active-content" : "content"}`}>
                            <p>Ajouter un produit </p>
                        </div>
                        <div className={`${state === 3 ? "content active-content" : "content"}`}>
                            <p>Modifier un produit </p>
                            <div className={`${state === 4? "content active-content" : "content"}`}>
                            <p>Modifier un produit </p>
                        </div>
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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border: 2px solid ${theme.colors.greyLight};

}
.tab{
    background: white;
    padding: 1rem;
    text-align: center;
    /* border-top: none; */
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
    height: 36.8vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

p{
    margin: 0;
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