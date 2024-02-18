import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../themes'
import { getTabSelected, tabsConfig } from '../tabConfig'
import OrderContext from '../../../../../../context/OrderContext'

const AdminPanel = () => {

    const { currentTabSelected } = useContext(OrderContext)

    const tabs = tabsConfig;
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {tabSelected && tabSelected.Content}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
background: ${theme.colors.white};
height: 240px;
border: 1px solid ${theme.colors.greyLight};
box-shadow: ${theme.shadows.subtle};
box-sizing: border-box;
padding: 30px 5%;



`;

export default AdminPanel