import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../themes';

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
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.heavy};
    color:  ${theme.colors.white};
    background-color:  ${theme.colors.primary_burger};
    border: 1px solid  ${theme.colors.primary_burger};

    &:hover:not([diseable]){
        background-color:  ${theme.colors.white};
        color:  ${theme.colors.primary_burger};
        border:  ${theme.colors.primary_burger} 1px solid;
        transition: all 200ms ease-out;
    }

    &:active{
      color:  ${theme.colors.white};
      background-color:  ${theme.colors.primary_burger};
      border: 1px solid  ${theme.colors.primary_burger};
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
`;

export default PrimaryButton