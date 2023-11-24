import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../themes'

const TextInput = ({ Icon, value, handleChange, className, ...extraProps }) => {

  return (
    <InputStyled >
      <div className={className}>
        {/* si y 'a une icon alors, je mets une icon */}
        {Icon && Icon}
        <input
          onChange={handleChange}
          {...extraProps}
        />
      </div>
    </InputStyled>
  )
}

const InputStyled = styled.div`

    .icon{
      font-size: ${theme.fonts.size.SM};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }

    /* .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.SM};
      margin-left: 10px;
    }    */


`
export default TextInput