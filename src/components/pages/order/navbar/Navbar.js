import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import RightSideNavbar from './RightSideNavbar';
import Logo from '../../../reusable-ui/Logo';
import { RefreshPage } from '../../../../utils/window';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo onClick={RefreshPage} className={"logo-order-page"} />
      <RightSideNavbar />
    </NavbarStyled>
  )}

const NavbarStyled = styled.nav`

    background: ${theme.colors.white};

    height:10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};

    .logo-order-page{
      cursor: pointer;
    }

    a{
      text-decoration: none;
    }     
`;

export default Navbar