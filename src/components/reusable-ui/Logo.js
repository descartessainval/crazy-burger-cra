import React from 'react'
import styled from "styled-components"
import { theme } from '../../themes';

const Logo = ({className, onClick}) => {
    return (
        <LogoStyled className={className} onClick={onClick} >
            <h1>CRAZEE</h1>
            <img src="/images/logo-orange.png" alt="log" />
            <h1>BURGER</h1> 
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  background: none;

  h1{
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4}px;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform:uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;

export default Logo