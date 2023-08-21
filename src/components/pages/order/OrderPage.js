import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
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
            <div className='container'>
                <Navbar username={username} />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    min-height: 94.6vh;
    min-width:  87.5rem;
    background: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  

    padding:25px 56px;

    .container{
        min-height: 94.6vh;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }

    @media only screen and(max-width: 1400px) {
        padding:1.563rem;
    }
`;

export default OrderPage