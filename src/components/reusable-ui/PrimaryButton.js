  import React from 'react'
  import { styled } from 'styled-components';
  import { theme } from '../../themes';

  const PrimaryButton = ({label, Icon, className}) => {
    return (
      <PrimaryButtonStyled className={className}>
        <span>{label}</span>
        {Icon && Icon}
      </PrimaryButtonStyled>
    )
  }

  const PrimaryButtonStyled = styled.button`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      white-space: nowrap;
      text-decoration: none;
      line-height: 1;

      border-radius: ${theme.borderRadius.round};
      
      color:  ${theme.colors.white};
      background-color:  ${theme.colors.primary};
      border: 1px solid  ${theme.colors.primary};

      &:hover:not([disabled]){
          background-color:  ${theme.colors.white};
          color:  ${theme.colors.primary};
          border:  ${theme.colors.primary} 1px solid;
          transition: all 200ms ease-out;
      }

      &:active{
        color:  ${theme.colors.white};
        background-color:  ${theme.colors.primary};
        border: 1px solid  ${theme.colors.primary};
      }

      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }
  `;

  export default PrimaryButton