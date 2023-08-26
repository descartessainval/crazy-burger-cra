import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../themes';

const TitleH2 = ({title}) => {

    return(
      <TitleH2Styled>{title}</TitleH2Styled>
    )
}  

const TitleH2Styled = styled.h2`
   font-family:  "Amatic SC", cursive;
    font-size:  ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 45.4px;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export default TitleH2