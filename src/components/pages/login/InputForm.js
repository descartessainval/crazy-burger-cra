import React from 'react'
import { styled } from 'styled-components'

const InputForm = ({Icon, username, handleChange, ...extraProps}) => {
  
  return (
  <InputStyled >
      {/* si y 'a une icon alors, je mets une icon */}
      {Icon && Icon}
      <input
        type="text"
        name="" 
        onChange={handleChange}
        {...extraProps}
       />
    </InputStyled>
  )
}

const InputStyled  = styled.div`


     /* border: 1px solid red; */
     background-color: #fff;
     border-radius: 5px;
     display: flex;
     align-items: center;
     padding: 18px 24px;
     margin: 18px 0;

     .icon{
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
     }

     input{ 
      border: none;
      font-size: 15px;
      color: #17161a;
      /* width: 100%; */
      /* display: flex; */
    }

    &::placeholder{
      background: white;
      color: lightgrey;
    }

`

export default InputForm