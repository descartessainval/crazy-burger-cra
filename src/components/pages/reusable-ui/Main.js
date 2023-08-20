import React from 'react'
import { styled } from 'styled-components';

const Main = () => {
  return (
    <MainStyled></MainStyled>
  )
}

const  MainStyled= styled.main`
  /*min-Height: 908.66px;56.791rem*/
  flex: 1;
  width: 87.5rem;
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0 0 15px 15px;
`;

export default Main