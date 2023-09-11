import React from 'react'
import { styled } from 'styled-components';

const Basket = () => {
  return (
    <BasketStyled>Basket</BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink ;
border-bottom-left-radius: 10px;

  /* height: 1;
  width: 200px; */
`;

export default Basket