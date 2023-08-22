import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import Cards from '../products/Cards';


const Main = () => {
  return (
    <MainStyled >
        <Cards/>
    </MainStyled>
  )
}

const  MainStyled= styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

export default Main