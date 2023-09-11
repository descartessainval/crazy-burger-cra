import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../themes'
import OrderContext from '../../../../../context/OrderContext'
import { getTabSelected, tabsConfig } from './tabConfig'

const AdminPanel = () => {
  const {currentTabSelected } = useContext(OrderContext)

    const tabs = tabsConfig;
    const tabSelected = getTabSelected(tabs, currentTabSelected)
  
    return (
        <AdminPanelStyled>
            <p>{tabSelected && tabSelected.label}</p>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
background: ${theme.colors.white};
height: 250px;
border: 1px solid ${theme.colors.greyLight};
box-shadow: ${theme.shadows.subtle};

p{
    padding: 0 20px;
}
`;

export default AdminPanel