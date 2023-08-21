import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import Profil from './Profil';

const RightSideNavbar = ({username}) => {
    
    return (
        <RightSideNavbarStyled >
            {/* TICKET F05 */}
            {/* <div className='admin_btn'>ADMIN BUTTON</div> */}
    
            <Profil username={username} />
            <BsPersonCircle className='icon' />
        </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyMedium};

    /* .admin_btn{
        background: orange;
    }
    */
    .icon{
        width: 36px;
        min-height: 36px ;
        padding-right: 50px;
    }
`;

export default RightSideNavbar