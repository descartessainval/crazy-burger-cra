import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import { styled } from 'styled-components'
import { theme } from '../../../../../themes'

const AdminPanel = () => {

    return (
        <AdminPanelStyled>
         
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
background: ${theme.colors.white};
height: 250px;
border: 1px solid ${theme.colors.greyLight};
box-shadow: ${theme.shadows.subtle};
`;

export default AdminPanel