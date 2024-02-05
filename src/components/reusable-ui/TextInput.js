import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../themes'

const TextInput = ({ Icon, value, handleChange, className, ...extraProps }) => {

  return (
    <TextInputStyled >
      <div className={className}>
        <div className='icon'>{Icon && Icon}</div>
        <input
          value={value}
          onChange={handleChange}
          {...extraProps}
        />
      </div>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.SM};
      margin:0 8px 0 10px;
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