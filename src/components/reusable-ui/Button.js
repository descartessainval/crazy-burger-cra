import React from 'react'
import {css, styled } from 'styled-components';
import { theme } from '../../themes';

const Button = ({ label, Icon, className, version = 'normal', onClick }) => {



  return (
    <PrimaryButtonStyled className={className}  version={version} onClick={onClick}>
      <span>{label}</span>
      <div className='icon'>{Icon && Icon}</div>
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
   


  ${({version} )=> extraStyleButton[version]}
  `;


const extraStylePrimary = css`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  .icon{
      display :flex;
      justify-content: center;
      align-items: center;
  }

  &:hover:not([disabled]){
          background-color:  ${theme.colors.white};
          color:  ${theme.colors.primary};
          border:  ${theme.colors.primary} 1px solid;
          transition: all 200ms ease-out;
  }

  :active {
    /* background-color: ${theme.colors.primary}; */
    color: ${theme.colors.primary};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    /* color: ${theme.colors.primary}; */

    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }


`
const extraStyleSuccess = css`
cursor: pointer;
color: ${theme.colors.white};
background-color: ${theme.colors.success};
border: 1px solid ${theme.colors.success};
border-radius: ${theme.borderRadius.round};
height: 35px;
padding: 0 1.5em;
font-weight: ${theme.fonts.weights.semiBold};

&:hover{
  color:${theme.colors.success}; 
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.success};
  transition: all 200ms ease-out;
}

&:active{
  color: ${theme.colors.success}; 
  border: 1px solid ${theme.colors.success};
}
`

const extraStyleButton ={
  normal: extraStylePrimary,
  success: extraStyleSuccess,
}


export default Button;