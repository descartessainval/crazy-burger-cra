import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../themes';
import RightSideNavbar from './RightSideNavbar';
import LogoSmall from '../reusable-ui/LogoSmall';

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <Link to={"#"}><LogoSmall className="left-side" /></Link>
      <RightSideNavbar username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: /*1400px*/87.5rem;
    height: /*98.19px*/ 6.137rem ;
    border-radius:  15px 15px 0 0;
    background: ${theme.colors.white};

    a{
      text-decoration: none;
    }
`;

export default Navbar