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
 
  background: ${theme.colors.background_white};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound}; 
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb{
    background: ${theme.colors.greyMedium};
    border-radius: ${theme.borderRadius.round};
  }
`;

export default Main