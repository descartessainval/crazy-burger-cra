import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import RightSideNavbar from './RightSideNavbar';
import Logo from '../../reusable-ui/Logo';
import { RefreshPage } from '../../utils/window'; 

const Navbar = ({ username}) => {

  return (
    <NavbarStyled>
      <Logo  onClick={RefreshPage} className={"logo-order-page"} />
      <RightSideNavbar username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: /*98.19px*/ 10vh;     
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.white};

    padding: 0 1.25rem /**20px */;

    .logo-order-page{
      cursor: pointer;
    }

    a{
      text-decoration: none;
    }     
`;

export default Navbar