import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../order/navbar/Navbar';
import Main from '../order/main/Main';
import { styled } from 'styled-components';
import { theme } from '../../../themes';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { MdSentimentNeutral } from 'react-icons/md';
import { EMPTY_PRODUCT } from './main/Admin/AdminPanel/AddForm';



const OrderPage = () => {
    //états 
    const [isModeAdmin, setIsModeAdmin] = useState(true) 
    const [isCollapse, setIsCollapse] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [products, setProducts] = useState(fakeMenu.MEDIUM);
    const [newProduct, setNewPeoduct] = useState(EMPTY_PRODUCT);

    //comportement(s)
    const handleAdd = (product) => {

        //  1 copie du tableau
        const menuCopy = [...products];

        //  2 manipulation de la copie du tableau
        const menuUpdated = [product, ...menuCopy]

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
        setProducts(fakeMenu.MEDIUM);
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
        resetMenu,


        newProduct,
        setNewPeoduct
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