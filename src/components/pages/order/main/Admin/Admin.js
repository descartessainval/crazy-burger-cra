import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import OrderContext from '../../../../../context/OrderContext';
import AdminPanel from './AdminPanel';


const Admin = () => {


    return (
        <PanelStyled  >
                <div >
                    <AdminTabs />
                    <AdminPanel/>
                </div>
        </PanelStyled>
    )
}

const PanelStyled = styled.div`
position: absolute;
bottom: 0;
right: 0;
left: 0;
`
export default Admin