import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../themes'

const TextInput = ({ Icon, value, handleChange, ...extraProps }) => {

  return (
    <InputStyled >
      {/* si y 'a une icon alors, je mets une icon */}
      {Icon && Icon}
      <input
        onChange={handleChange}
        {...extraProps}
      />
    </InputStyled>
  )
}

const InputStyled = styled.div`
     background-color: ${theme.colors.white};
     border-radius: ${theme.borderRadius.round};
     display: flex;
     align-items: center;
     padding: 18px 24px;
     margin: 18px 0;

     .icon{
      font-size: ${theme.fonts.size.P0};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
     }

     input{ 
      border: none;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.dark};
      width: 100%;
      /* display: flex; */
      
      &::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
      }
    }
`
export default TextInput