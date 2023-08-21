import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../themes';

const Main = () => {
  return (
    <MainStyled></MainStyled>
  )
}

const  MainStyled= styled.main`
  /*min-Height: 908.66px;56.791rem*/
  flex: 1;
  min-width: 87.5rem;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

export default Main