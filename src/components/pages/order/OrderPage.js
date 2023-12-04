import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../order/navbar/Navbar';
import Main from '../order/main/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';


const OrderPage = () => {
    //états 
    const [isModeAdmin, setIsModeAdmin] = useState(true) // j'initialise le mode admin à true pour travailler dans le panel pour le rendre disponible tour le long de la prod
    const [isCollapse, setIsCollapse] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [products, setProducts] = useState(fakeMenu.MEDIUM);


    //comportement(s)
    const handleAdd = (newProduct) => {
   
        //  1 copie du tableau
        const menuCopy = [...products];

        //  2 manipulation de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]

        //  3 update du state
        setProducts(menuUpdated)
    }



    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,

        isCollapse,
        setIsCollapse,
        
        currentTabSelected,
        setCurrentTabSelected,

        products,
        handleAdd

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