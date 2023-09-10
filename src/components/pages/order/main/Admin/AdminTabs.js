import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../themes';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from 'react-icons/md'
import OrderContext from '../../../../../context/OrderContext';

const AdminTabs = () => {

        const {isModeAdmin, isChevronUp, state, setState} = useContext(OrderContext)


    //comportement
   const handleClick = (index) => {
       setState(index);
    }

    return (
        <AdminTabsStyled>
            <li style={{ paddingLeft: "10rem", visibility: "hidden" }}></li>
            <li onClick={() => { handleClick(1) }} className={`${state === 1 ? "tab active-tab" : "tab "}`} >
                {isModeAdmin === true || isChevronUp ? <FiChevronDown /> : <FiChevronUp />}
            </li>
            <li onClick={() => handleClick(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}>
                <AiOutlinePlus />
                <a href='#'>Ajouter un produit</a>
            </li>
            <li onClick={() => handleClick(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`}>
                <MdModeEditOutline />
                <a href='#'>Modifier un produit</a>
            </li>
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

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

.tab a:hover{
    /* text-underline-offset: 5px; */
 }

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

`;

export default AdminTabs