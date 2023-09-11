import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import OrderContext from '../../../../../context/OrderContext';


const Admin = () => {
    const { isCollapse } = useContext(OrderContext)
    return (
        <AdminStyled>
            <AdminTabs />
            {!isCollapse && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`
export default Admin