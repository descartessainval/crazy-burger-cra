import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import { styled } from 'styled-components'
import { theme } from '../../../../../themes'

const AdminPanel = () => {
    const { state, setState } = useContext(OrderContext)

    return (
        <AdminPanelStyled /*className=" contents_hide"*/>
            {/* <div className={`${state === 1 ? "content active-content" : "content"}`}>
            </div>
            <div className={`${state === 2 || state === 1 ? "content active-content" : "content"}`}>
                <p>Ajouter un produit </p>
            </div>
            <div className={`${state === 3 ? "content active-content" : "content"}`}>
                <p>Modifier un produit </p>
            </div> */}
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