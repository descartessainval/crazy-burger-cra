import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../themes'
import InputField from '../../../../reusable-ui/InputField'

const AdminPanel = () => {
    return (
        <AdminPanelStyled>
            <InputField />
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