import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../themes';

import AdminTabs from './AdminTabs';
import OrderContext from '../../../../../context/OrderContext';
import AdminPanel from './AdminPanel';


const Admin = () => {
    const {state, setState} = useContext(OrderContext)

    return (
        <PanelStyled  className="toggle-panel-open">
                <div className="container-height">
                    {/* tabs admin */}
                    <AdminTabs />
                    {/* content */}
                    <AdminPanel/>
                </div>
        </PanelStyled>
    )
}

const PanelStyled = styled.div`
position: absolute;
color: black;
bottom: 0;
right: 0;
left: 0;
`
export default Admin