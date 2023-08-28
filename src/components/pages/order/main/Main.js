import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Menu from './Menu';
import Basket from './Basket';


const Main = () => {
  return (
    <MainStyled >
      {/* <Basket />  */}
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.main`

  flex: 1;
  /*
    //handle position with flex 
    display: flex;
    justify-content: center;
  */
 
  display: grid;
  grid-template-columns: 1fr;
  background: ${theme.colors.background_white};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound}; 
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;


  
  /* overflow: auto; */
overflow-y: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none;    
`;

export default Main