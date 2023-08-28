import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../order/navbar/Navbar';
import Main from '../order/main/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';


const OrderPage = () => {
    //états 
    const { username } = useParams();
    //comportement
    //vue
    return (
        <OrderPageStyled >
            <div className='container'>
                <Navbar username={username} />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    height: 94.6vh;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;  

    padding: 1.563rem 3.5rem;

    .container{
        height: 94.6vh;
        width:  87.5rem;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRoundd};
    }

    @media only screen and (max-width: 1400px) {
        padding: 1.563rem;
    }
`;

export default OrderPage