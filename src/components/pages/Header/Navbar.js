import React from 'react'
import Logo from '../reusable-ui/Logo'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = ({ username }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    localStorage.clear();
  }
  return (
    <NavbarStyled  >
      <Logo className="left-side" />
      <div className='right-side'>
        <div  className='account-name'>
          <h2>Bonjour {username}</h2>
          <button type="submit" onClick={handleClick}>Déconnexion</button>
        </div>
        <BsPersonCircle className='icon' />
      </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.header`

    background: red ;
    display: flex;
    justify-content: space-between;
    .right-side{
      border: yellow 1px solid;
      display: flex;
    }
    .account-name{
      background: green
    }
`;

export default Navbar