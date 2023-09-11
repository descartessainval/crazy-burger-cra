import React from 'react'
import { styled } from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
// import {  } from "react-icons/ai"
import Tab from '../../../../reusable-ui/Tab';
import { theme } from '../../../../../themes';

const AdminTabs = ({isCollapse, setIsCollapse}) => {
    return (
        <AdminTabsStyled>
            <Tab  label="" Icon= {isCollapse ? <FiChevronUp/> : <FiChevronDown/>}  onClick={()=>  setIsCollapse(!isCollapse)} className={isCollapse ? "is-active" : ""}/>
            <Tab  label="Ajouter un produit" Icon= {<AiOutlinePlus/>}  onClick={()=>  setIsCollapse(!isCollapse)} className={isCollapse ? "is-active" : ""}/>
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`

display: flex;
padding: 0 20px;

.is-active{
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark} ;
    color: ${theme.colors.white};
}

button{
    margin-left: 1px;
}
`;

export default AdminTabs