import React from 'react'
import { styled } from 'styled-components';
import RightSideNavbar from './RightSideNavbar';
import { Link } from 'react-router-dom';
import LogoSmall from '../reusable-ui/LogoSmall';

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <Link to={"#"}><LogoSmall className="left-side" style={{}}/></Link>
      <RightSideNavbar username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.header`

    background: red ;
    display: flex;
    justify-content: space-between;

    a{
      text-decoration: none;
    }
   
`;

export default Navbar