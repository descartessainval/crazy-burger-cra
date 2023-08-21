import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../themes';
import RightSideNavbar from './RightSideNavbar';
import Logo from '../reusable-ui/Logo';
// import LogoSmall from '../reusable-ui/LogoSmall';

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <Link to={"#"}><Logo/></Link>
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


    a{
      text-decoration: none;
    }

    
`;

export default Navbar