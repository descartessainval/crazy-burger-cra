import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import { styled } from 'styled-components'
import { theme } from '../../../../../themes'

const AdminPanel = () => {
    const { state } = useContext(OrderContext)

    return (
        <AdminPanelStyled className=" contents_hide">
            <div className={`${state === 1 ? "content active-content" : "content"}`}>
            </div>
            <div className={`${state === 2 || state === 1 ? "content active-content" : "content"}`}>
                <p>Ajouter un produit </p>
            </div>
            <div className={`${state === 3 ? "content active-content" : "content"}`}>
                <p>Modifier un produit </p>
            </div>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    min-height:29.65vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    /* height: 250px; */
background: ${theme.colors.white};
border: ${theme.colors.greyLight};
box-shadow:${theme.shadows.subtle};


p{
    margin: 0;
    font-size: 16px;
    line-height:21.79px;
    margin-left: 20px;
}

.content{
    display: none;
    position: relative;
}

.active-content{
    display: block;
}
`;

export default AdminPanel