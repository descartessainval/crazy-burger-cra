import React from 'react'
import Logo from '../reusable-ui/Logo'
import { styled } from 'styled-components';
import RightSideNavbar from './RightSideNavbar';

const Navbar = ({ username }) => {
  return (
    <NavbarStyled  >
      <Logo className="left-side" />
      <RightSideNavbar username={username}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.header`

    background: red ;
    display: flex;
    justify-content: space-between;
   
`;

export default Navbar