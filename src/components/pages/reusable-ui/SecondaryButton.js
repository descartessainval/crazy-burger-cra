import React from 'react'
import { styled } from 'styled-components';

const SecondaryButton = ({ label, handleClick, ...extraProps }) => {
    return (
        <SecondaryButtonStyled {...extraProps} onClick={handleClick}>
            <span>{label}</span>
        </SecondaryButtonStyled>
    )
}
const SecondaryButtonStyled = styled.button`
  
`;

export default SecondaryButton