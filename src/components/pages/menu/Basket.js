import React from 'react'
import { styled } from 'styled-components';

const Basket = () => {
  return (
    <BasketStyled>Basket</BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: red ;
  height: 1;
  width: 200px;
  margin: 1rem;
`;

export default Basket