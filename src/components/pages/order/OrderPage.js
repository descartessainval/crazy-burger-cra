import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Main from '../reusable-ui/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';


const OrderPage = () => {
    //états 
    const { username } = useParams();
    //comportement
    //vue
    return (
        <OrderPageStyled >
            <Navbar username={username} />
            <Main />
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    min-width:  87.5rem;
    min-height: 94.6vh;
    background: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    padding:25px 56px;


    @media only screen and(max-width: 1400px) {
        padding:25px;
    }
`;

export default OrderPage