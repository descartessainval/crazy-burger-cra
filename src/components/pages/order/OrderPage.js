import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../order/navbar/Navbar';
import Main from '../order/main/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import OrderContext from '../../../context/OrderContext';


const OrderPage = () => {
    //états 
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapse, setIsCollapse] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")

    //comportement(s)
    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapse,
        setIsCollapse,
        currentTabSelected,
        setCurrentTabSelected,
    }

    //vue
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className='container'>
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
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
        position: relative;
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