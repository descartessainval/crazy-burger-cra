import React from 'react'
import { styled } from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Tab from '../../../../reusable-ui/Tab';
import { theme } from '../../../../../themes';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { tabsConfig } from './tabConfig';

const AdminTabs = () => {
    //state
    const { isCollapse, setIsCollapse, currentTabSelected, setCurrentTabSelected } = useContext(OrderContext)
    
    //comportment
    const selectTab = (tabSelected) => {
        setIsCollapse(false) // tu m'ouvres le pannel
        setCurrentTabSelected(tabSelected)
    }

    const tabs = tabsConfig

    //affichage
    return (
        <AdminTabsStyled>
            <Tab
                index="chevron"
                label=""
                Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown />}
                onClick={()=>setIsCollapse(!isCollapse)}
                className={isCollapse ? "is-active" : ""}
            />
            {tabs.map((tab) => (
                <Tab
                     key={tab.index}
                     index={tab.index}
                     label={tab.label}
                     Icon={tab.Icon}
                     onClick={() => selectTab(tab.index)}
                     className={currentTabSelected === tab.index ? "is-active" : ""}
                />
            ))}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`

display: flex;
position: absolute;
top: -43px;
left: 5%;

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