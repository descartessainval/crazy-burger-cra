import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../order/navbar/Navbar';
import Main from '../order/main/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { MdSentimentNeutral } from 'react-icons/md';


const OrderPage = () => {
    //états 
    const [isModeAdmin, setIsModeAdmin] = useState(true) // j'initialise le mode admin à true pour travailler dans le panel pour le rendre disponible tour le long de la prod
    const [isCollapse, setIsCollapse] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [products, setProducts] = useState(fakeMenu.SMALL);


    //comportement(s)
    const handleAdd = (newProduct) => {

        //  1 copie du tableau
        const menuCopy = [...products];

        //  2 manipulation de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]

        //  3 update du state
        setProducts(menuUpdated)
    }


    const handleDelete = (IdOfProductToDelete) => {
        // 1. copy du state 
        const menuCopy = [...products];

        // 2. manip de la copie du state
        const menuUpdated = menuCopy.filter((indexToDelete) => indexToDelete.id !== IdOfProductToDelete);

        // 3. update state 
        setProducts(menuUpdated);
    }

    /*nfn*/ const resetMenu = () => {
        setProducts(fakeMenu.SMALL);
    }

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,

        isCollapse,
        setIsCollapse,

        currentTabSelected,
        setCurrentTabSelected,

        products,
        //En observation => je n'ai pas accès au setter 
        //puisqu'ils sont tous définis dans les comportement.
        //Egalement pas de setter dans le context
        handleAdd,
        handleDelete,
        resetMenu
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
        height: /*94.6vh*/ 833px;
        width:  /*87.5rem*/ 1400px; 
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRoundd};
    }

    @media only screen and (max-width: 1400px) {
        padding: 1.563rem;
    }
`;

export default OrderPage