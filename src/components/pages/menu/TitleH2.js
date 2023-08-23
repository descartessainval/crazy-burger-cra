import React from 'react'
import { styled } from 'styled-components';

const TitleH2 = ({product}) => {

    return(
      <TitleH2Styled>{product.title}</TitleH2Styled>
    )
}  

const TitleH2Styled = styled.h2`
   font-family:  "Amatic SC", cursive;
    font-size: 2.2rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export default TitleH2