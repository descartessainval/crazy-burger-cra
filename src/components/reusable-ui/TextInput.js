import React from 'react'
import { css, styled } from 'styled-components'
import { theme } from '../../themes'

const TextInput = ({ Icon, value, handleChange, className, version="normal", ...extraProps }) => {

  return (
    <TextInputStyled  className={className} version={version}>
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
  display: flex;  
  align-items: center;
  
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 8px;
    color: ${theme.colors.greySemiDark};
  }
  
  input{ 
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    
    &::placeholder{
      color: ${theme.colors.greyMedium};
    }
  }
  
  
  //step2
  ${(props)=>{
    if(props.version === "normal") return extraNormalStyle;
    if(props.version === "minimalist") return extraMinimalistStyle;
  }}

/* step 1 */
/* ${(props) => (props.version === 'normal' && extraNormalStyle )}; //bien penser à ponctuer l'interpolation avec un ";"
${(props) => (props.version === 'minimalist' && extraMinimalistStyle)}; // err non bloquante */
`
export default TextInput




const extraNormalStyle = css`
  border-radius: ${theme.borderRadius.round};

  background-color: ${theme.colors.white};
  padding: 12px 24px;  
  input{
     color: ${theme.colors.greySemiDark};
  }

  &::placeholder{
      background: ${theme.colors.white};
  }

`;

const extraMinimalistStyle = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;  
  color: ${theme.colors.greyBlue};
  
  input{
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.background_white};
  }

  &:focus{
   outline : 0;
  }
`