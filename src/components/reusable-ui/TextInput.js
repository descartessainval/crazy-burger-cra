import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../themes'

const TextInput = ({ Icon, value, handleChange, className, ...extraProps }) => {

  return (
    <TextInputStyled  className={className}>
        <div className='icon'>{Icon && Icon}</div>
        <input
          value={value}
          onChange={handleChange}
          {...extraProps}
         />
      </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
      background-color: ${theme.colors.white};
      border-radius: ${theme.borderRadius.round};
      display: flex;
      align-items: center;
      
      padding: 18px 24px;
  
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.SM};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }

    input{ 
      border: none;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.dark};
      width: 100%;
      
      &::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
      }
    }
`
export default TextInput