import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from 'react-icons/md'
import Tab from '../../../../reusable-ui/Tab';

const AdminTabs = () => {
    return (
        <AdminTabsStyled>
            <Tab  Icon={<FiChevronDown/>}/>
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`

display: flex;
padding: 0 20px;

`;

export default AdminTabs