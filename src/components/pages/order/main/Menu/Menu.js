import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../../../utils/maths'
import Card from '../../../../reusable-ui/Card';
import OrderContext from '../../../../../context/OrderContext';
import { EmptyMenuAdmin } from './EmptyMenuAdmin';
import { EmptyMenuClient } from './EmptyMenuClient';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {


    const { products, isModeAdmin, handleDelete, resetMenu } = useContext(OrderContext);


    //comportements

 //affichage
    if (products.length == 0) {
        if (!isModeAdmin) {
            return (<EmptyMenuClient/>)
        }
        return (<EmptyMenuAdmin resetMenu={resetMenu}/>)
    }
    
    return (
        <MenuStyled>
            {products.map(({ id, title, imageSource, price }) => (
                <Card
                    imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                    key={id}
                    infoId={id}
                    title={title}
                    leftDescription={formatPrice(price)} 
                    hasDeleteButton={isModeAdmin} 
                    onDelete={() => handleDelete(id)}
                />
            ))}
        </MenuStyled>
    )
}

const MenuStyled = styled.ul`

    margin: 0;
    background: #F5F5F7;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    overflow-y: scroll;
`;

export default Menu