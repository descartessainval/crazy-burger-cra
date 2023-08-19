import React from 'react'
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../reusable-ui/SecondaryButton';
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';

const RightSideNavbar = ({ username }) => {
    const navigate = useNavigate();

    return (
        <RightSideNavbarStyled >
            <div className='account-name'>
                <p>Bonjour {username}</p>
                <SecondaryButton type={"submit"} label={"Déconnexion"} handleClick={() => { navigate("/"); localStorage.clear() }} />
            </div>
            <BsPersonCircle className='icon' />
        </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    border: yellow 1px solid;
    display: flex;
  
  .account-name{
    background: green
  }
  
`;

export default RightSideNavbar