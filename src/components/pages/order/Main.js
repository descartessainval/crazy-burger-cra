import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import Cards from '../menu/Cards';
import Basket from '../menu/Basket';


const Main = () => {
  return (
    <MainStyled >
      {/* <Basket /> */}
      <Cards />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  background: ${theme.colors.background_white};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound}; 

  overflow: auto;

  -ms-overflow-style: none;  
     scrollbar-width: none;    
    //Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
`;

export default Main