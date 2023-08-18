import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Header/Navbar';
import Main from '../reusable-ui/Main';
import { styled } from 'styled-components';

const OrderPage = () => {
    //états 
    const { username } = useParams();
    //comportement
    //vue
    return (
        <OrderpageStyled >
            <Navbar username={username} />
            <Main />
        </OrderpageStyled>
    )
}

const OrderpageStyled  = styled.div`
  min-Height: 88vh;
  background: orange;
   padding: 50px ;
`;

export default OrderPage