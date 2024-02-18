import React from 'react'
import { FiCheck } from "react-icons/fi";
import styled from 'styled-components';
import { theme } from '../../../../../../themes'

const SubmitMessage = () => {
  return (
        <SubmitMessageStyled >
          <FiCheck className='icon' />
          <span className='msg'> Ajouté avec succès</span>
        </SubmitMessageStyled>
  )
}

const SubmitMessageStyled =  styled.div`
    margin-left: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    .icon{
      color: ${theme.colors.success};
      margin-left: 10px;
      width: 1em;
      height: 1em;
      border:1px solid ${theme.colors.success};
      border-radius: 50% ;
      vertical-align: middle; 
    }

    .msg{
      margin-left:5px;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.success};
    }

`

export default SubmitMessage