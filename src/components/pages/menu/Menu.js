import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from './Card';

const Menu = () => {
    const [products, setProducts] = useState(fakeMenu2);
    return (
            <MenuStyled>
                {products.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </MenuStyled>
    )
}

const MenuStyled = styled.ul`

    margin: 0;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    list-style-type:none;
    justify-items: center;
    padding: 50px 50px 150px;



    @media screen and  (max-width: 1120px){
        grid-template-columns: repeat(2, 1fr)
    }

    @media screen and  (max-width: 580px){
        grid-template-columns: repeat(1, 1fr)
    }

`;

export default Menu