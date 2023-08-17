import React from 'react'
import { styled } from 'styled-components';


const PrimaryButton = ({label, Icon}) => {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not([diseable]){
        background-color: white;
        color: #ff9f1b;
        border: #ff9f1b 1px solid;
        transition: all 200ms ease-out;
    }

    &:active{
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
`;

export default PrimaryButton